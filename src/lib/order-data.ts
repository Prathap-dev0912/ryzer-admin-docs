import { Section } from "./api-data";

export const Orders: Section[]=[
  {
    id: "orders",
    title: "Orders",
    description: "Manage transactions and orders",
    endpoints: [
      {
        id: "orders-create",
        title: "Orders Count",
        method: "GET",
        path: "/api/orders/orders-count",
        description: "Create a new investment order",
        parameters: [
          {
            name: "investorId",
            type: "string",
            description: "Investor ID",
            required: true,
          },
          {
            name: "assetId",
            type: "string",
            description: "Asset ID",
            required: true,
          },
        ],
        request: {
          description: "Create a new order",
          example: `{
  "investorId": "inv_001",
  "assetId": "ast_001",
  "quantity": 100,
  "pricePerUnit": 1500
}`,
        },
        response: {
          description: "Returns created order object",
          example: `{
 {
    "success": true,
    "message": "Orders retrieved successfully",
    "statusCode": 200,
    "data": [
        {
            "totalOrders": 129,
            "completedOrders": 35,
            "pendingOrders": 91,
            "refundedOrders": 0,
            "failedOrders": 0,
            "cancelledOrders": 0
        }
    ]
}
}`,
        },
      },

      {
        id: "orders-create",
        title: "All Orders",
        method: "GET",
        path: "/api/orders/admin?page=1&limit=10&search=&currentStatus=",
        description: "Create a new investment order",
        parameters: [
          {
            name: "investorId",
            type: "string",
            description: "Investor ID",
            required: true,
          },
          {
            name: "assetId",
            type: "string",
            description: "Asset ID",
            required: true,
          },
        ],
        request: {
          description: "Create a new order",
          example: `{
  "investorId": "inv_001",
  "assetId": "ast_001",
  "quantity": 100,
  "pricePerUnit": 1500
}`,
        },
        response: {
          description: "Returns created order object",
          example: `{
 {
    "data": [
        {
            "_id": "69a9b202f6176fc097a7d0a9",
            "assetId": {
                "_id": "694bab2160dd72d19eee5711",
                "class": "real-estate",
                "name": "Bluewaters Crest Tower"
            },
            "investorId": {
                "_id": "6932b2196516954363c94807",
                "firstName": "Mohamad",
                "lastName": "Anas",
                "email": "anas@ryzer.app"
            },
            "tokensBooked": 1,
            "totalOrderValue": 543.3008578079998,
            "paymentType": "full-payment",
            "paymentMethod": "crypto",
            "currentStatus": "awaiting-documents-to-be-signed",
            "currency": "USDT",
            "paidAmountfromuser": 147.9376059381892,
            "createdAt": "2026-03-05T16:40:34.342Z"
        },
        {
            "_id": "69a997abf6176fc097a7cf4b",
            "assetId": {
                "_id": "6943e8227f101807cde5e872",
                "class": "real-estate",
                "name": "Burj Vista Residences"
            },
            "investorId": {
                "_id": "6932b2196516954363c94807",
                "firstName": "Mohamad",
                "lastName": "Anas",
                "email": "anas@ryzer.app"
            },
            "tokensBooked": 1,
            "totalOrderValue": 526.400768124536,
            "paymentType": "full-payment",
            "paymentMethod": "crypto",
            "currentStatus": "awaiting-documents-to-be-signed",
            "currency": "USDT",
            "paidAmountfromuser": 143.3358116064087,
            "createdAt": "2026-03-05T14:48:11.816Z"
        },
        {
            "_id": "69a7fd82f6176fc097a7acdd",
            "assetId": {
                "_id": "6943f354b9c43d93b053a564",
                "class": "real-estate",
                "name": "Bandra Kurla Signature Tower"
            },
            "investorId": {
                "_id": "6923f06ee7c46e28b1624e32",
                "firstName": "Abhishek",
                "lastName": "Godi",
                "email": "abhishek@ryzer.app"
            },
            "tokensBooked": 1,
            "totalOrderValue": 1.0160624910603646,
            "paymentType": "full-payment",
            "paymentMethod": "crypto",
            "currentStatus": "order-completed",
            "currency": "USDT",
            "paidAmountfromuser": 0.011088438951425198,
            "createdAt": "2026-03-04T09:38:10.348Z"
        },
        {
            "_id": "69a1d16ff6176fc097a72c55",
            "assetId": {
                "_id": "6943e8227f101807cde5e872",
                "class": "real-estate",
                "name": "Burj Vista Residences"
            },
            "investorId": {
                "_id": "691ea565cfe4f24db1ce77ed",
                "firstName": "Satya",
                "lastName": "Bhaskar",
                "email": "bhaskarperuri266@gmail.com"
            },
            "tokensBooked": 1,
            "totalOrderValue": 527.167003300359,
            "paymentType": "full-payment",
            "paymentMethod": "crypto",
            "currentStatus": "awaiting-documents-to-be-signed",
            "currency": "USDT",
            "paidAmountfromuser": 143.54445290683705,
            "createdAt": "2026-02-27T17:16:31.491Z"
        },
        {
            "_id": "6999a389f6176fc097a5f8db",
            "assetId": {
                "_id": "6943f354b9c43d93b053a564",
                "class": "real-estate",
                "name": "Bandra Kurla Signature Tower"
            },
            "investorId": {
                "_id": "691ea565cfe4f24db1ce77ed",
                "firstName": "Satya",
                "lastName": "Bhaskar",
                "email": "bhaskarperuri266@gmail.com"
            },
            "tokensBooked": 1,
            "totalOrderValue": 1.023152948812734,
            "paymentType": "full-payment",
            "paymentMethod": "crypto",
            "currentStatus": "awaiting-documents-to-be-signed",
            "currency": "USDT",
            "paidAmountfromuser": 0.011234143053195917,
            "createdAt": "2026-02-21T12:22:33.877Z"
        },
        {
            "_id": "6999a279f6176fc097a5f7b6",
            "assetId": {
                "_id": "6943f354b9c43d93b053a564",
                "class": "real-estate",
                "name": "Bandra Kurla Signature Tower"
            },
            "investorId": {
                "_id": "691ea565cfe4f24db1ce77ed",
                "firstName": "Satya",
                "lastName": "Bhaskar",
                "email": "bhaskarperuri266@gmail.com"
            },
            "tokensBooked": 1,
            "totalOrderValue": 1.0231744219507293,
            "paymentType": "full-payment",
            "paymentMethod": "crypto",
            "currentStatus": "order-completed",
            "currency": "USDT",
            "paidAmountfromuser": 0.01123437882664926,
            "createdAt": "2026-02-21T12:18:01.709Z"
        },
        {
            "_id": "6998abd5f6176fc097a5f54e",
            "assetId": {
                "_id": "6943f354b9c43d93b053a564",
                "class": "real-estate",
                "name": "Bandra Kurla Signature Tower"
            },
            "investorId": {
                "_id": "691f10a99ff4daabc58996fd",
                "firstName": "Bhanu",
                "lastName": "Prakash",
                "email": "bhanu@ryzer.app"
            },
            "tokensBooked": 1,
            "totalOrderValue": 1.02,
            "paymentType": "full-payment",
            "paymentMethod": "fiat",
            "currentStatus": "order-completed",
            "currency": "INR",
            "paidAmountfromuser": 1.02,
            "createdAt": "2026-02-20T18:45:41.188Z"
        },
        {
            "_id": "6998aad8f6176fc097a5f3ac",
            "assetId": {
                "_id": "6943f354b9c43d93b053a564",
                "class": "real-estate",
                "name": "Bandra Kurla Signature Tower"
            },
            "investorId": {
                "_id": "691f10a99ff4daabc58996fd",
                "firstName": "Bhanu",
                "lastName": "Prakash",
                "email": "bhanu@ryzer.app"
            },
            "tokensBooked": 1,
            "totalOrderValue": 1.02,
            "paymentType": "full-payment",
            "paymentMethod": "fiat",
            "currentStatus": "order-completed",
            "currency": "INR",
            "paidAmountfromuser": 1.02,
            "createdAt": "2026-02-20T18:41:28.224Z"
        },
        {
            "_id": "6998520bf6176fc097a5f163",
            "assetId": {
                "_id": "6943f354b9c43d93b053a564",
                "class": "real-estate",
                "name": "Bandra Kurla Signature Tower"
            },
            "investorId": {
                "_id": "6926d7f7a2c5e4046f46c4fe",
                "firstName": "Charan Teja",
                "lastName": "Kodmanchili",
                "email": "charanteja@ryzer.app"
            },
            "tokensBooked": 1,
            "totalOrderValue": 1.01673093051141,
            "paymentType": "full-payment",
            "paymentMethod": "crypto",
            "currentStatus": "order-completed",
            "currency": "USDT",
            "paidAmountfromuser": 0.011200758487744319,
            "createdAt": "2026-02-20T12:22:35.777Z"
        },
        {
            "_id": "6998502af6176fc097a5f01d",
            "assetId": {
                "_id": "6943f354b9c43d93b053a564",
                "class": "real-estate",
                "name": "Bandra Kurla Signature Tower"
            },
            "investorId": {
                "_id": "6926d7f7a2c5e4046f46c4fe",
                "firstName": "Charan Teja",
                "lastName": "Kodmanchili",
                "email": "charanteja@ryzer.app"
            },
            "tokensBooked": 1,
            "totalOrderValue": 1.0167726104487669,
            "paymentType": "full-payment",
            "paymentMethod": "crypto",
            "currentStatus": "order-completed",
            "currency": "USDT",
            "paidAmountfromuser": 0.011201217652404415,
            "createdAt": "2026-02-20T12:14:34.119Z"
        }
    ],
    "pagination": {
        "currentPage": 1,
        "limit": 10,
        "totalPages": 13,
        "totalCount": 129,
        "hasNext": true,
        "hasPrevious": false
    },
    "message": "Orders retrieved successfully"
}
}`,
        },
      },

       {
        id: "orders-create",
        title: "Order Details",
        method: "GET",
        path: "/api/orders/admin/69a9b202f6176fc097a7d0a9",
        description: "Get a specific order details using orderId",
        parameters: [
          {
            name: "orderId",
            type: "string",
            description: "order ID",
            required: true,
          },
        ],
        request: {
          description: "Create a new order",
          example: `{
  "investorId": "inv_001",
  "assetId": "ast_001",
  "quantity": 100,
  "pricePerUnit": 1500
}`,
        },
        response: {
          description: "Returns created order object",
          example: `{
 {
    "success": true,
    "message": "Order retrieved successfully",
    "statusCode": 200,
    "data": {
        "_id": "69a9b202f6176fc097a7d0a9",
        "documents": [
            {
                "_id": "694baecf60dd72d19eee5aa1",
                "templateName": "Ryzer Investors Document",
                "templateType": "expression_of_interest_document",
                "provider": "docuseal",
                "providerTemplateId": "999999",
                "createdAt": "2025-12-24T09:13:51.246Z",
                "updatedAt": "2025-12-24T09:13:51.246Z"
            }
        ],
        "tokensBooked": 1,
        "ownershipPercentage": 0.01,
        "totalOrderValue": 543.3008578079998,
        "paymentType": "full-payment",
        "hasFullPaymentDone": true,
        "currentStatus": "awaiting-documents-to-be-signed",
        "totalFeePaid": 45,
        "currency": "USDT",
        "tracking": [
            {
                "title": "Order Booked Successfully",
                "description": "Your order has been booked successfully with full payment",
                "status": "order-created",
                "isCompleted": true,
                "comingOrder": 1,
                "completedAt": "2026-03-05T16:40:34.335Z",
                "dueDate": null,
                "_id": "69a9b202f6176fc097a7d0aa"
            },
            {
                "title": "Fully Invested",
                "description": "Order has been fully invested",
                "status": "fully-invested",
                "isCompleted": true,
                "comingOrder": 2,
                "completedAt": "2026-03-05T16:40:34.335Z",
                "dueDate": null,
                "_id": "69a9b202f6176fc097a7d0ab"
            },
            {
                "title": "Awaiting for Documents to be Signed",
                "description": "Waiting for documents to be sent for signature",
                "status": "awaiting-documents-to-be-signed",
                "isCompleted": false,
                "comingOrder": 3,
                "completedAt": null,
                "dueDate": null,
                "_id": "69a9b202f6176fc097a7d0ac"
            },
            {
                "title": "Property Tokens Transfer Pending",
                "description": "Property tokens transfer is in progress",
                "status": "property-tokens-transfer-pending",
                "isCompleted": false,
                "comingOrder": 5,
                "completedAt": null,
                "dueDate": null,
                "_id": "69a9b202f6176fc097a7d0ad"
            }
        ],
        "breakup": [
            {
                "name": "Reserve Fee",
                "value": 5,
                "percentage": 1,
                "isPercentage": true,
                "_id": "69a9b202f6176fc097a7d0ae"
            },
            {
                "name": "Insurance On Title Deeds",
                "value": 5,
                "percentage": 1,
                "isPercentage": true,
                "_id": "69a9b202f6176fc097a7d0af"
            },
            {
                "name": "DLD Fees",
                "value": 20,
                "percentage": 4,
                "isPercentage": true,
                "_id": "69a9b202f6176fc097a7d0b0"
            },
            {
                "name": "Legal Survey",
                "value": 5,
                "percentage": 1,
                "isPercentage": true,
                "_id": "69a9b202f6176fc097a7d0b1"
            },
            {
                "name": "Platform fee",
                "value": 5,
                "percentage": 1,
                "isPercentage": true,
                "_id": "69a9b202f6176fc097a7d0b2"
            },
            {
                "name": "Brokerage fees",
                "value": 5,
                "percentage": 1,
                "isPercentage": true,
                "_id": "69a9b202f6176fc097a7d0b3"
            }
        ],
        "transactionHash": "0x61cd82ba6070b2714e1f5378212ca149108fb74630ed77b647f29b885e4edbb8",
        "onchainOrderId": "0xf1bd32255d0d0fcf11848f4e102d4ec67d2be01bf1fe1e7b9aa0f9ee9b56f52e",
        "projectAddress": "0x678C2b11153720b3Fc3eE16A40461a9F602a2b4e",
        "escrowAddress": "0xeba5a2f959fc3e7e8f6476Cd12890c8aa7FdB7b7",
        "orderManagerAddress": "0x53adcA8086999064244FEeB06D07C0364869807C",
        "paymentStatus": "pending",
        "paymentGatewayReference": null,
        "paymentTransactionId": null,
        "paymentTimestamp": null,
        "payerVPA": null,
        "payerName": null,
        "paymentFailureReason": null,
        "createdAt": "2026-03-05T16:40:34.342Z",
        "updatedAt": "2026-03-05T16:41:11.517Z",
        "__v": 0,
        "asset": {
            "_id": "694bab2160dd72d19eee5711",
            "currency": "AED",
            "name": "Bluewaters Crest Tower",
            "country": "AE",
            "state": "DU",
            "city": "Dubai",
            "landmark": "Bluewaters Island — Opposite Ain Dubai & JBR Beach",
            "tokenInformation": {
                "tokenPrice": 500
            }
        },
        "investor": {
            "_id": "6932b2196516954363c94807",
            "firstName": "Mohamad",
            "lastName": "Anas",
            "email": "anas@ryzer.app",
            "mobileNumber": "9110334346",
            "avatar": "https://ryzer-v2.s3.ap-south-1.amazonaws.com/users/681c506bd81904bc923c7757/094fd3a1-3729-4f71-ad9f-86a74b1066be.png"
        },
        "company": {
            "_id": "694ba8d460dd72d19eee53e6",
            "name": "Azure Marina Property SPV LLC",
            "currency": "AED"
        },
        "paidAmountfromuser": 147.9376059381892,
        "paymentMethod": "crypto",
        "assetCurrency": "AED"
    }
}
}`,
        },
      },
    ],
  },
]

