import AWS from "aws-sdk";

const ses = new AWS.SES({ region: "us-east-1" });

async function sendMail(event, context) {
  const params = {
    Source: "nickyiliwang@gmail.com",
    Destination: {
      ToAddresses: ["nickyiliwang@gmail.com"],
    },
    Message: {
      Body: {
        Text: {
          Data: "Hello from Nick Wang",
        },
      },
      Subject: {
        Data: "Test Email 1 form Nick Wang",
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const handler = sendMail;
