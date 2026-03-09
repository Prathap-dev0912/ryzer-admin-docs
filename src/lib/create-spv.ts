import { Section } from "./api-data";

export const CreateSpv: Section[]=[
    {
    id: "cerateSpv",
    title: "SPV Creation",
    description: "Manage Special Purpose Vehicle operations",
    endpoints: [
     
      {
        id: "assets-list",
        title: "Company",
        method: "POST",
        path: "/api/company",
        description: "Retrieve all assets with optional filtering",
        parameters: [
          {
            name: "name",
            type: "string",
            description: "Asset type filter (stock, bond, real_estate)",
            required: true,
          },
          {
            name: "type",
            type: "string",
            description: "Asset status filter (active, inactive)",
            required: false,
          },
          {
            name: "jurisdiction",
            type: "string",
            description: "Asset type filter (stock, bond, real_estate)",
            required: false,
          },
        ],
        request: {
          description: "Retrieve assets with filters",
          example: `{name: "only one", type: "private-limited", jurisdiction: "IN", currency: "INR",…}`,
        },
        response: {
          description: "Returns array of asset objects",
          example: `{
 {
    "success": true,
    "message": "Company created successfully",
    "statusCode": 201,
    "data": {
        "name": "only one",
        "OnchainAddress": null,
        "type": "private-limited",
        "jurisdiction": "IN",
        "blockchainCompanyId": null,
        "formationDate": "2026-03-04T18:30:00.000Z",
        "businessPurpose": "This platform provides a centralized admin dashboard for managing tokenized assets, investors, SPVs, and orders efficiently. It enables administrators to monitor operations, manage data, and streamline asset management processes through secure API interactions.",
        "status": "draft",
        "currency": "INR",
        "logo": null,
        "memoAndTerms": {
            "investmentMemorandum": null,
            "termsAndConditions": null,
            "riskFactor": null,
            "investmentStrategy": null
        },
        "escrowBankDetails": {
            "bankName": null,
            "accountType": null,
            "accountNumber": null,
            "routingNumber": null,
            "ifscCode": null,
            "bankStatement": null
        },
        "legalDocuments": {
            "llcOperatingAgreement": null,
            "articlesOfAssociation": null,
            "memorandumOfAssociation": null,
            "otherDocuments": null
        },
        "boardOfDirectors": {
            "treasuryManager": {
                "name": null,
                "email": null,
                "phoneNumber": null,
                "idNumber": null,
                "idProof": null
            },
            "assetManager": {
                "name": null,
                "email": null,
                "phoneNumber": null,
                "idNumber": null,
                "idProof": null
            }
        },
        "daoConfiguration": {
            "votingPeriod": {
                "days": null,
                "hours": null
            },
            "governanceRights": {
                "votingRights": false,
                "proposalCreation": false,
                "adminVotePower": false
            },
            "daoName": null,
            "tokenSymbol": null,
            "blockchain": null,
            "governanceModel": null,
            "proposalThresholdPercent": null,
            "quorumPercent": null,
            "decisionType": null,
            "issuerRepSignature": false
        },
        "completedSteps": [
            "basic-information"
        ],
        "_id": "69ac6db1f6176fc097a86285",
        "createdAt": "2026-03-07T18:25:53.812Z",
        "updatedAt": "2026-03-07T18:25:53.812Z",
        "__v": 0,
        "id": "69ac6db1f6176fc097a86285"
    }
}
}`,
        },
      },

      {
        id: "assets-list",
        title: "Company",
        method: "PUT",
        path: "/api/company/69ac6db1f6176fc097a86285",
        description: "Retrieve all assets with optional filtering",
        parameters: [
          {
            name: "name",
            type: "string",
            description: "Asset type filter (stock, bond, real_estate)",
            required: true,
          },
          {
            name: "type",
            type: "string",
            description: "Asset status filter (active, inactive)",
            required: false,
          },
        ],
        request: {
          description: "Retrieve assets with filters",
          example: `{name: "only one", type: "private-limited", jurisdiction: "IN", currency: "INR",…}`,
        },
        response: {
          description: "Returns array of asset objects",
          example: `{
 {
    "success": true,
    "message": "Company updated successfully",
    "statusCode": 200,
    "data": {
        "memoAndTerms": {
            "investmentMemorandum": "This platform provides a centralized admin dashboard for managing tokenized assets, investors, SPVs, and orders efficiently. It enables administrators to monitor operations, manage data, and streamline asset management processes through secure API interactions.",
            "termsAndConditions": "This platform provides a centralized admin dashboard for managing tokenized assets, investors, SPVs, and orders efficiently. It enables administrators to monitor operations, manage data, and streamline asset management processes through secure API interactions.",
            "riskFactor": "This platform provides a centralized admin dashboard for managing tokenized assets, investors, SPVs, and orders efficiently. It enables administrators to monitor operations, manage data, and streamline asset management processes through secure API interactions.",
            "investmentStrategy": "This platform provides a centralized admin dashboard for managing tokenized assets, investors, SPVs, and orders efficiently. It enables administrators to monitor operations, manage data, and streamline asset management processes through secure API interactions."
        },
        "escrowBankDetails": {
            "bankName": null,
            "accountType": null,
            "accountNumber": null,
            "routingNumber": null,
            "ifscCode": null,
            "bankStatement": null
        },
        "legalDocuments": {
            "llcOperatingAgreement": null,
            "articlesOfAssociation": null,
            "memorandumOfAssociation": null,
            "otherDocuments": null
        },
        "boardOfDirectors": {
            "treasuryManager": {
                "name": null,
                "email": null,
                "phoneNumber": null,
                "idNumber": null,
                "idProof": null
            },
            "assetManager": {
                "name": null,
                "email": null,
                "phoneNumber": null,
                "idNumber": null,
                "idProof": null
            }
        },
        "daoConfiguration": {
            "votingPeriod": {
                "days": null,
                "hours": null
            },
            "governanceRights": {
                "votingRights": false,
                "proposalCreation": false,
                "adminVotePower": false
            },
            "daoName": null,
            "tokenSymbol": null,
            "blockchain": null,
            "governanceModel": null,
            "proposalThresholdPercent": null,
            "quorumPercent": null,
            "decisionType": null,
            "issuerRepSignature": false
        },
        "_id": "69ac6db1f6176fc097a86285",
        "name": "only one",
        "OnchainAddress": null,
        "type": "private-limited",
        "jurisdiction": "IN",
        "blockchainCompanyId": null,
        "formationDate": "2026-03-04T18:30:00.000Z",
        "businessPurpose": "This platform provides a centralized admin dashboard for managing tokenized assets, investors, SPVs, and orders efficiently. It enables administrators to monitor operations, manage data, and streamline asset management processes through secure API interactions.",
        "status": "draft",
        "currency": "INR",
        "logo": null,
        "completedSteps": [
            "basic-information",
            "memo-terms"
        ],
        "createdAt": "2026-03-07T18:25:53.812Z",
        "updatedAt": "2026-03-07T18:27:37.451Z",
        "__v": 0,
        "id": "69ac6db1f6176fc097a86285"
    }
}
}`,
        },
      },

      {
        id: "assets-list",
        title: "Upload Files",
        method: "POST",
        path: "/api/s3-file/upload-single",
        description: "Retrieve all assets with optional filtering",
        parameters: [
          {
            name: "filename",
            type: "string",
            description: "Asset type filter (stock, bond, real_estate)",
            required: true,
          },
          {
            name: "mimetype",
            type: "string",
            description: "Asset status filter (active, inactive)",
            required: false,
          },
             {
            name: "filesize",
            type: "string",
            description: "Asset status filter (active, inactive)",
            required: true,
          },
        ],
        request: {
          description: "Retrieve assets with filters",
          example: `{fileName: "PDF Cover.pdf", mimeType: "application/pdf", fileSize: 255302,…}`,
        },
        response: {
          description: "Returns array of asset objects",
          example: `{
 {
    "uploadUrl": "https://storage.googleapis.com/ryzer-v2/companies/69ac6db1f6176fc097a86285/423906c0-1a8d-4e36-bbcf-913b947c3f5a.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=GOOG1EPKUJJCBYHR3OLIPFFPWUDUD6I3UITD5DPZH56KQXNHCLEFWHCXNCV6H%2F20260307%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260307T184236Z&X-Amz-Expires=3600&X-Amz-Signature=abb03ad5c16a25b230c2f7cd04b5bf072900d0aefe606a4fce1bbf6aebdc5989&X-Amz-SignedHeaders=host&x-amz-meta-belongsto=company&x-amz-meta-refid=69ac6db1f6176fc097a86285&x-id=PutObject",
    "savedS3Object": {
        "refId": "69ac6db1f6176fc097a86285",
        "belongsTo": "company",
        "fileName": "PDF Cover.pdf",
        "fileSize": 255302,
        "mimeType": "application/pdf",
        "key": "companies/69ac6db1f6176fc097a86285/423906c0-1a8d-4e36-bbcf-913b947c3f5a.pdf",
        "bucket": "ryzer-v2",
        "isPublic": false,
        "_id": "69ac719cf6176fc097a86292",
        "createdAt": "2026-03-07T18:42:36.686Z",
        "updatedAt": "2026-03-07T18:42:36.686Z",
        "__v": 0
    },
    "expiresIn": 3600
}
}`,
        },
      },

       {
        id: "assets-list",
        title: "Upload Files",
        method: "GET",
        path: "/api/s3-file/69ac719cf6176fc097a86292/s3Url",
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
          example: `GET /api/s3-file/69ac719cf6176fc097a86292/s3Url`,
        },
        response: {
          description: "Returns array of asset objects",
          example: `{
 {
    "s3Url": "https://storage.googleapis.com/ryzer-v2/companies/69ac6db1f6176fc097a86285/423906c0-1a8d-4e36-bbcf-913b947c3f5a.pdf"
}
}`,
        },
      },

       {
        id: "assets-list",
        title: "Additional Board Members",
        method: "POST",
        path: "/api/company/additional-board-member?companyId=69ac6db1f6176fc097a86285",
        description: "Retrieve all assets with optional filtering",
        parameters: [
          {
            name: "fullname",
            type: "string",
            description: "Asset type filter (stock, bond, real_estate)",
            required: true,
          },
          {
            name: "email",
            type: "string",
            description: "Asset status filter (active, inactive)",
            required: false,
          },
             {
            name: "countrycode",
            type: "number",
            description: "Asset status filter (active, inactive)",
            required: true,
          },
              {
            name: "phone number",
            type: "number",
            description: "Asset status filter (active, inactive)",
            required: true,
          },
        ],
        request: {
          description: "Retrieve assets with filters",
          example: `{fileName: "PDF Cover.pdf", mimeType: "application/pdf", fileSize: 255302,…}`,
        },
        response: {
          description: "Returns array of asset objects",
          example: `{
 {
    "uploadUrl": "https://storage.googleapis.com/ryzer-v2/companies/69ac6db1f6176fc097a86285/423906c0-1a8d-4e36-bbcf-913b947c3f5a.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=GOOG1EPKUJJCBYHR3OLIPFFPWUDUD6I3UITD5DPZH56KQXNHCLEFWHCXNCV6H%2F20260307%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260307T184236Z&X-Amz-Expires=3600&X-Amz-Signature=abb03ad5c16a25b230c2f7cd04b5bf072900d0aefe606a4fce1bbf6aebdc5989&X-Amz-SignedHeaders=host&x-amz-meta-belongsto=company&x-amz-meta-refid=69ac6db1f6176fc097a86285&x-id=PutObject",
    "savedS3Object": {
        "refId": "69ac6db1f6176fc097a86285",
        "belongsTo": "company",
        "fileName": "PDF Cover.pdf",
        "fileSize": 255302,
        "mimeType": "application/pdf",
        "key": "companies/69ac6db1f6176fc097a86285/423906c0-1a8d-4e36-bbcf-913b947c3f5a.pdf",
        "bucket": "ryzer-v2",
        "isPublic": false,
        "_id": "69ac719cf6176fc097a86292",
        "createdAt": "2026-03-07T18:42:36.686Z",
        "updatedAt": "2026-03-07T18:42:36.686Z",
        "__v": 0
    },
    "expiresIn": 3600
}
}`,
        },
      },

       {
        id: "assets-list",
        title: "Additional Board Members",
        method: "PUT",
        path: "/api/company/additional-board-member/697c613c62d747a22112b0ff",
        description: "Retrieve all assets with optional filtering",
        parameters: [
          {
            name: "fullname",
            type: "string",
            description: "Asset type filter (stock, bond, real_estate)",
            required: true,
          },
        ],
        request: {
          description: "Retrieve assets with filters",
          example: `{fileName: "PDF Cover.pdf", mimeType: "application/pdf", fileSize: 255302,…}`,
        },
        response: {
          description: "Returns array of asset objects",
          example: `{
 {
    "success": true,
    "message": "Additional Board Member updated successfully",
    "statusCode": 200,
    "data": {
        "_id": "697c613c62d747a22112b0ff",
        "companyId": "697b221362d747a2211113ba",
        "fullName": "bantii",
        "email": "banti@gmail.com",
        "countryCode": "+91",
        "phoneNumber": "7569085885",
        "idNumber": "502299",
        "idProof": {
            "name": "PDF Cover.pdf",
            "url": "https://storage.googleapis.com/ryzer-v2/companies/697b221362d747a2211113ba/e952440e-e59e-42bc-8a07-3d898e8c6cfc.pdf",
            "_id": "69ac7577f6176fc097a8630e"
        },
        "role": "asset-manager",
        "createdAt": "2026-01-30T07:43:56.479Z",
        "updatedAt": "2026-03-07T18:59:03.227Z",
        "__v": 0
    }
}
}`,
        },
      },

      {
        id: "assets-list",
        title: "Additional Board Members",
        method: "DELETE",
        path: "/api/company/additional-board-member/697c613c62d747a22112b0ff",
        description: "Retrieve all assets with optional filtering",
        parameters: [
          {
            name: "fullname",
            type: "string",
            description: "Asset type filter (stock, bond, real_estate)",
            required: true,
          },
        ],
        request: {
          description: "Retrieve assets with filters",
          example: `{fileName: "PDF Cover.pdf", mimeType: "application/pdf", fileSize: 255302,…}`,
        },
        response: {
          description: "Returns array of asset objects",
          example: `{
 {
    "success": true,
    "message": "Additional Board Member updated successfully",
    "statusCode": 200,
    "data": {
        "_id": "697c613c62d747a22112b0ff",
        "companyId": "697b221362d747a2211113ba",
        "fullName": "bantii",
        "email": "banti@gmail.com",
        "countryCode": "+91",
        "phoneNumber": "7569085885",
        "idNumber": "502299",
        "idProof": {
            "name": "PDF Cover.pdf",
            "url": "https://storage.googleapis.com/ryzer-v2/companies/697b221362d747a2211113ba/e952440e-e59e-42bc-8a07-3d898e8c6cfc.pdf",
            "_id": "69ac7577f6176fc097a8630e"
        },
        "role": "asset-manager",
        "createdAt": "2026-01-30T07:43:56.479Z",
        "updatedAt": "2026-03-07T18:59:03.227Z",
        "__v": 0
    }
}
}`,
        },
      },
    ]
}
        
]