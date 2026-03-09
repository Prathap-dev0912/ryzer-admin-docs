import { Section } from "./api-data";

export const CreateAsset: Section[]=[
    {
    id: "CreateAsset",
    title: "Asset Creation",
    description: "Manage Special Purpose Vehicle operations",
    endpoints: [
     
      {
        id: "assets-list",
        title: "Company names",
        method: "GET",
        path: "/api/company/names",
        description: "Retrieve all assets with optional filtering",
        request: {
          description: "Retrieve assets with filters",
          example: `GET /api/company/names`,
        },
        response: {
          description: "Returns array of asset objects",
          example: `{
 {
    "success": true,
    "message": "Companies retrieved successfully",
    "statusCode": 200,
    "data": [
        {
            "_id": "697b221362d747a2211113ba",
            "name": "Teja",
            "id": "697b221362d747a2211113ba"
        }
    ]
}
}`,
        },
      },

      {
        id: "assets-list",
        title: "DAO",
        method: "GET",
        path: "/api/company/dao/697b221362d747a2211113ba",
        description: "Retrieve all assets with optional filtering",
        parameters: [
          {
            name: "id",
            type: "string",
            description: "Asset type filter (stock, bond, real_estate)",
            required: true,
          },
        
        ],
        request: {
          description: "Retrieve assets with filters",
          example: `GET /api/company/dao/697b221362d747a2211113ba`,
        },
        response: {
          description: "Returns array of asset objects",
          example: `{
 {
    "success": true,
    "message": "Company DAO configuration retrieved successfully",
    "statusCode": 200,
    "data": {
        "_id": "697b221362d747a2211113ba",
        "currency": "INR",
        "daoConfiguration": {
            "daoName": "hhh",
            "tokenSymbol": "HHH_DAO",
            "blockchain": null,
            "governanceModel": "equal-voting",
            "proposalThresholdPercent": 4,
            "quorumPercent": 23,
            "votingPeriod": {
                "days": 12,
                "hours": 12
            },
            "decisionType": "all-decisions",
            "governanceRights": {
                "votingRights": false,
                "proposalCreation": false,
                "adminVotePower": false
            },
            "issuerRepSignature": false
        }
    }
}
}`,
        },
      },

//       {
//         id: "assets-list",
//         title: "Upload Files",
//         method: "POST",
//         path: "/api/s3-file/upload-single",
//         description: "Retrieve all assets with optional filtering",
//         parameters: [
//           {
//             name: "filename",
//             type: "string",
//             description: "Asset type filter (stock, bond, real_estate)",
//             required: true,
//           },
//           {
//             name: "mimetype",
//             type: "string",
//             description: "Asset status filter (active, inactive)",
//             required: false,
//           },
//              {
//             name: "filesize",
//             type: "string",
//             description: "Asset status filter (active, inactive)",
//             required: true,
//           },
//         ],
//         request: {
//           description: "Retrieve assets with filters",
//           example: `{fileName: "PDF Cover.pdf", mimeType: "application/pdf", fileSize: 255302,…}`,
//         },
//         response: {
//           description: "Returns array of asset objects",
//           example: `{
//  {
//     "uploadUrl": "https://storage.googleapis.com/ryzer-v2/companies/69ac6db1f6176fc097a86285/423906c0-1a8d-4e36-bbcf-913b947c3f5a.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=GOOG1EPKUJJCBYHR3OLIPFFPWUDUD6I3UITD5DPZH56KQXNHCLEFWHCXNCV6H%2F20260307%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260307T184236Z&X-Amz-Expires=3600&X-Amz-Signature=abb03ad5c16a25b230c2f7cd04b5bf072900d0aefe606a4fce1bbf6aebdc5989&X-Amz-SignedHeaders=host&x-amz-meta-belongsto=company&x-amz-meta-refid=69ac6db1f6176fc097a86285&x-id=PutObject",
//     "savedS3Object": {
//         "refId": "69ac6db1f6176fc097a86285",
//         "belongsTo": "company",
//         "fileName": "PDF Cover.pdf",
//         "fileSize": 255302,
//         "mimeType": "application/pdf",
//         "key": "companies/69ac6db1f6176fc097a86285/423906c0-1a8d-4e36-bbcf-913b947c3f5a.pdf",
//         "bucket": "ryzer-v2",
//         "isPublic": false,
//         "_id": "69ac719cf6176fc097a86292",
//         "createdAt": "2026-03-07T18:42:36.686Z",
//         "updatedAt": "2026-03-07T18:42:36.686Z",
//         "__v": 0
//     },
//     "expiresIn": 3600
// }
// }`,
//         },
//       },

       

    ]
}
        
]