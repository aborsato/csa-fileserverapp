// An HTTP trigger Azure Function that returns a SAS token for Azure Storage for the specified container. 
// You can also optionally specify a particular blob name and access permissions. 
// To learn more, see https://github.com/Azure-Samples/functions-dotnet-sas-token/blob/master/README.md

var azure = require('azure-storage');

module.exports = async function (context, req) {
    if (req.body && req.body.blobName) {
        context.res = {
            status: 200,
            body: generateSasToken(context, "files", req.body.blobName)
        }
    } else {
        context.res = {
            status: 400,
            body: "Specify a value for 'blobName'"
        };
    }
    
    context.log('Response', context.res);
    // context.done();
}

function generateSasToken(context, container, blobName, permissions) {
    var connString = process.env.ApplicationStorage;
    var blobService = azure.createBlobService(connString);

    // Create a SAS token that expires in an hour
    // Set start time to five minutes ago to avoid clock skew.
    var startDate = new Date();
    startDate.setMinutes(startDate.getMinutes() - 5);
    var expiryDate = new Date(startDate);
    expiryDate.setMinutes(startDate.getMinutes() + 60);

    permissions = permissions || azure.BlobUtilities.SharedAccessPermissions.READ;

    var sharedAccessPolicy = {
        AccessPolicy: {
            Permissions: permissions,
            Start: startDate,
            Expiry: expiryDate
        }
    };
    
    var sasToken = blobService.generateSharedAccessSignature(container, blobName, sharedAccessPolicy);
    return {
        token: sasToken,
        uri: blobService.getUrl(container, blobName, sasToken, true)
    };
}
