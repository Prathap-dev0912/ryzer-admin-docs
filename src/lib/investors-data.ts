import { Section } from "./api-data";

export const Investors: Section[]=[
    {
    id: "investors",
    title: "Investors",
    description: "Manage investor information and relationships",
    endpoints: [
      {
        id: "investors-list",
        title: "List Investors",
        method: "GET",
        path: "/api/user/investor/list?page=1&limit=10",
        description: "Retrieve a list of all investors",
        parameters: [
          {
            name: "limit",
            type: "number",
            description: "Number of records to return",
            required: false,
          },
          {
            name: "offset",
            type: "number",
            description: "Number of records to skip",
            required: false,
          },
        ],
        request: {
          description: "Retrieve investors with pagination",
          example: `GET /api/investors?limit=20&offset=0 HTTP/1.1`,
        },
        response: {
          description: "Returns array of investor objects",
          example: `{
  {
    "data": [
        {
            "_id": "69a542caf6176fc097a74baf",
            "firstName": null,
            "lastName": null,
            "kycCompleted": false,
            "smartWalletAddress": null,
            "email": "eyecan00505@gmail.com",
            "countryCode": null,
            "mobileNumber": null,
            "isEmailVerified": true,
            "isMobileVerified": false,
            "country": null,
            "roles": [
                "guest"
            ],
            "gender": null,
            "referal": "eyec0001",
            "dateOfBirth": null,
            "type": null,
            "avatar": "https://ryzer-v2.s3.ap-south-1.amazonaws.com/users/681c506bd81904bc923c7757/094fd3a1-3729-4f71-ad9f-86a74b1066be.png",
            "address": null,
            "walletId": null,
            "twoFactorAuth": {
                "secret": null,
                "enabled": false
            },
            "tempTwoFactorSecret": null,
            "created_at": "2026-03-02T07:56:58.257Z",
            "updated_at": "2026-03-02T07:57:25.945Z",
            "__v": 0,
            "fullName": "",
            "isPanVerified": false,
            "isAadhaarVerified": false,
            "adminApprovalStatus": "Pending"
        },
        {
            "_id": "699ef1daf6176fc097a64b6f",
            "firstName": null,
            "lastName": null,
            "kycCompleted": false,
            "smartWalletAddress": null,
            "email": "satya@ryzer.app",
            "countryCode": null,
            "mobileNumber": null,
            "isEmailVerified": false,
            "isMobileVerified": false,
            "country": null,
            "roles": [
                "guest"
            ],
            "gender": null,
            "referal": "saty0002",
            "dateOfBirth": null,
            "type": null,
            "avatar": "https://ryzer-v2.s3.ap-south-1.amazonaws.com/users/681c506bd81904bc923c7757/094fd3a1-3729-4f71-ad9f-86a74b1066be.png",
            "address": null,
            "walletId": null,
            "twoFactorAuth": {
                "secret": null,
                "enabled": false
            },
            "tempTwoFactorSecret": null,
            "created_at": "2026-02-25T12:58:02.447Z",
            "updated_at": "2026-02-25T12:58:02.447Z",
            "__v": 0,
            "fullName": "",
            "isPanVerified": false,
            "isAadhaarVerified": false,
            "adminApprovalStatus": null
        },
        {
            "_id": "6999a18ef6176fc097a5f6f7",
            "firstName": null,
            "lastName": null,
            "kycCompleted": false,
            "smartWalletAddress": null,
            "email": "satyaperuri@ryzer.app",
            "countryCode": null,
            "mobileNumber": null,
            "isEmailVerified": false,
            "isMobileVerified": false,
            "country": null,
            "roles": [
                "guest"
            ],
            "gender": null,
            "referal": "saty0001",
            "dateOfBirth": null,
            "type": null,
            "avatar": "https://ryzer-v2.s3.ap-south-1.amazonaws.com/users/681c506bd81904bc923c7757/094fd3a1-3729-4f71-ad9f-86a74b1066be.png",
            "address": null,
            "walletId": null,
            "twoFactorAuth": {
                "secret": null,
                "enabled": false
            },
            "tempTwoFactorSecret": null,
            "created_at": "2026-02-21T12:14:06.157Z",
            "updated_at": "2026-02-21T12:14:06.157Z",
            "__v": 0,
            "fullName": "",
            "isPanVerified": false,
            "isAadhaarVerified": false,
            "adminApprovalStatus": null
        },
        {
            "_id": "69980c91f6176fc097a5dadc",
            "firstName": null,
            "lastName": null,
            "kycCompleted": false,
            "smartWalletAddress": null,
            "email": "vishwaksenareddy.02@gmail.com",
            "countryCode": null,
            "mobileNumber": null,
            "isEmailVerified": true,
            "isMobileVerified": false,
            "country": null,
            "roles": [
                "guest"
            ],
            "gender": null,
            "referal": "vish0002",
            "dateOfBirth": null,
            "type": null,
            "avatar": "https://ryzer-v2.s3.ap-south-1.amazonaws.com/users/681c506bd81904bc923c7757/094fd3a1-3729-4f71-ad9f-86a74b1066be.png",
            "address": null,
            "walletId": null,
            "twoFactorAuth": {
                "secret": null,
                "enabled": false
            },
            "tempTwoFactorSecret": null,
            "created_at": "2026-02-20T07:26:09.638Z",
            "updated_at": "2026-02-20T07:26:27.314Z",
            "__v": 0,
            "fullName": "",
            "isPanVerified": false,
            "isAadhaarVerified": false,
            "adminApprovalStatus": "Pending"
        },
        {
            "_id": "698cae2020b743532024f67f",
            "firstName": null,
            "lastName": null,
            "kycCompleted": false,
            "smartWalletAddress": null,
            "email": "wenile9334@pixdd.com",
            "countryCode": null,
            "mobileNumber": null,
            "isEmailVerified": false,
            "isMobileVerified": false,
            "country": null,
            "roles": [
                "guest"
            ],
            "gender": null,
            "referal": "weni0001",
            "dateOfBirth": null,
            "type": null,
            "avatar": "https://ryzer-v2.s3.ap-south-1.amazonaws.com/users/681c506bd81904bc923c7757/094fd3a1-3729-4f71-ad9f-86a74b1066be.png",
            "address": null,
            "walletId": null,
            "twoFactorAuth": {
                "secret": null,
                "enabled": false
            },
            "tempTwoFactorSecret": null,
            "created_at": "2026-02-11T16:28:16.358Z",
            "updated_at": "2026-02-11T16:28:16.358Z",
            "__v": 0,
            "fullName": "",
            "isPanVerified": false,
            "isAadhaarVerified": false,
            "adminApprovalStatus": null
        },
        {
            "_id": "698c4216f6176fc097a3c511",
            "firstName": "Mohamad",
            "lastName": "Akhil",
            "kycCompleted": false,
            "smartWalletAddress": null,
            "email": "mohamadakhil310@gmail.com",
            "countryCode": "+91",
            "mobileNumber": "8309877006",
            "isEmailVerified": true,
            "isMobileVerified": true,
            "country": "India",
            "roles": [
                "guest"
            ],
            "gender": null,
            "referal": "moha0001",
            "dateOfBirth": "2006-05-02T00:00:00.000Z",
            "type": "individual",
            "avatar": "https://ryzer-v2.s3.ap-south-1.amazonaws.com/users/681c506bd81904bc923c7757/094fd3a1-3729-4f71-ad9f-86a74b1066be.png",
            "address": null,
            "walletId": null,
            "twoFactorAuth": {
                "secret": null,
                "enabled": false
            },
            "tempTwoFactorSecret": null,
            "created_at": "2026-02-11T08:47:18.683Z",
            "updated_at": "2026-02-11T08:58:24.850Z",
            "__v": 0,
            "fullName": "Mohamad Akhil",
            "isPanVerified": false,
            "isAadhaarVerified": false,
            "adminApprovalStatus": "Pending"
        },
        {
            "_id": "698b6d0220b743532024814a",
            "firstName": null,
            "lastName": null,
            "kycCompleted": false,
            "smartWalletAddress": null,
            "email": "hfgasj@gmail.com",
            "countryCode": null,
            "mobileNumber": null,
            "isEmailVerified": false,
            "isMobileVerified": false,
            "country": null,
            "roles": [
                "guest"
            ],
            "gender": null,
            "referal": "hfga0001",
            "dateOfBirth": null,
            "type": null,
            "avatar": "https://ryzer-v2.s3.ap-south-1.amazonaws.com/users/681c506bd81904bc923c7757/094fd3a1-3729-4f71-ad9f-86a74b1066be.png",
            "address": null,
            "walletId": null,
            "twoFactorAuth": {
                "secret": null,
                "enabled": false
            },
            "tempTwoFactorSecret": null,
            "created_at": "2026-02-10T17:38:10.676Z",
            "updated_at": "2026-02-10T17:38:10.676Z",
            "__v": 0,
            "fullName": "",
            "isPanVerified": false,
            "isAadhaarVerified": false,
            "adminApprovalStatus": null
        },
        {
            "_id": "698b6bfe20b7435320248140",
            "firstName": null,
            "lastName": null,
            "kycCompleted": false,
            "smartWalletAddress": null,
            "email": "varmapbhargav@gmail.com",
            "countryCode": null,
            "mobileNumber": null,
            "isEmailVerified": false,
            "isMobileVerified": false,
            "country": null,
            "roles": [
                "guest"
            ],
            "gender": null,
            "referal": "varm0001",
            "dateOfBirth": null,
            "type": null,
            "avatar": "https://ryzer-v2.s3.ap-south-1.amazonaws.com/users/681c506bd81904bc923c7757/094fd3a1-3729-4f71-ad9f-86a74b1066be.png",
            "address": null,
            "walletId": null,
            "twoFactorAuth": {
                "secret": null,
                "enabled": false
            },
            "tempTwoFactorSecret": null,
            "created_at": "2026-02-10T17:33:50.781Z",
            "updated_at": "2026-02-10T17:33:50.781Z",
            "__v": 0,
            "fullName": "",
            "isPanVerified": false,
            "isAadhaarVerified": false,
            "adminApprovalStatus": null
        },
        {
            "_id": "698b6afb20b7435320248133",
            "firstName": null,
            "lastName": null,
            "kycCompleted": false,
            "smartWalletAddress": null,
            "email": "hap@gmail.com",
            "countryCode": null,
            "mobileNumber": null,
            "isEmailVerified": false,
            "isMobileVerified": false,
            "country": null,
            "roles": [
                "guest"
            ],
            "gender": null,
            "referal": "hap@0001",
            "dateOfBirth": null,
            "type": null,
            "avatar": "https://ryzer-v2.s3.ap-south-1.amazonaws.com/users/681c506bd81904bc923c7757/094fd3a1-3729-4f71-ad9f-86a74b1066be.png",
            "address": null,
            "walletId": null,
            "twoFactorAuth": {
                "secret": null,
                "enabled": false
            },
            "tempTwoFactorSecret": null,
            "created_at": "2026-02-10T17:29:31.534Z",
            "updated_at": "2026-02-10T17:29:31.534Z",
            "__v": 0,
            "fullName": "",
            "isPanVerified": false,
            "isAadhaarVerified": false,
            "adminApprovalStatus": null
        },
        {
            "_id": "698b6aba20b7435320248127",
            "firstName": null,
            "lastName": null,
            "kycCompleted": false,
            "smartWalletAddress": null,
            "email": "admin@giv.com",
            "countryCode": null,
            "mobileNumber": null,
            "isEmailVerified": false,
            "isMobileVerified": false,
            "country": null,
            "roles": [
                "guest"
            ],
            "gender": null,
            "referal": "admi0002",
            "dateOfBirth": null,
            "type": null,
            "avatar": "https://ryzer-v2.s3.ap-south-1.amazonaws.com/users/681c506bd81904bc923c7757/094fd3a1-3729-4f71-ad9f-86a74b1066be.png",
            "address": null,
            "walletId": null,
            "twoFactorAuth": {
                "secret": null,
                "enabled": false
            },
            "tempTwoFactorSecret": null,
            "created_at": "2026-02-10T17:28:26.252Z",
            "updated_at": "2026-02-10T17:28:26.252Z",
            "__v": 0,
            "fullName": "",
            "isPanVerified": false,
            "isAadhaarVerified": false,
            "adminApprovalStatus": null
        }
    ],
    "pagination": {
        "currentPage": 1,
        "limit": 10,
        "totalPages": 7,
        "totalCount": 70,
        "hasNext": true,
        "hasPrevious": false
    },
    "message": "Investors retrieved successfully"
}
}`,
        },
      },
      {
        id: "investors-create",
        title: "Create Investor",
        method: "POST",
        path: "/api/kyc/trigger-reminder-emails/?userId=696627ac00e3c244e939978a",
        description: "Create a new investor record",
        parameters: [
          {
            name: "userId",
            type: "string",
            description: "Investor name",
            required: true,
          }
        ],
        request: {
          description: "Create a new investor",
          example: `POST /api/kyc/trigger-reminder-emails/?userId=696627ac00e3c244e939978a`,
        },
        response: {
          description: "Returns created investor object",
          example: `{
  {
    "success": true,
    "message": "KYC reminder emails sent successfully",
    "statusCode": 200
}
}`,
        },
      },
    ],
  },
]