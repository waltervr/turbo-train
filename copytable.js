const { DynamoDBClient, ScanCommand, PutItemCommand } = require("@aws-sdk/client-dynamodb");

const ddbClient = new DynamoDBClient();

exports.handler = async () => {

  const { Items } = await ddbClient.send(
    new ScanCommand({
      TableName: "DynamoDBAuctionsTableStack-local-auctionsTablelocalAE097846-19VXOF60TOXL5",
    })
  );
  console.log("Successfully scanned table");
//   console.log("Copying", Items.length, "Items");

//   const putPromises = [];

//   Items.forEach((item) => {
//     putPromises.push(
//       ddbClient.send(
//         new PutItemCommand({
//           TableName: "tableRestored",
//           Item: item,
//         })
//       )
//     );
//   });

//   await Promise.all(putPromises);
//   console.log("Successfully copied table");
};
