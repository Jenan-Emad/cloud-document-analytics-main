// // // config/fileStorage.js - Working file-based storage
// // const fs = require('fs');
// // const path = require('path');

// // const DATA_DIR = path.join(__dirname, '../data');
// // const DOCUMENTS_FILE = path.join(DATA_DIR, 'documents.json');
// // const CLASSIFICATIONS_FILE = path.join(DATA_DIR, 'classifications.json');

// // // Ensure data directory exists
// // if (!fs.existsSync(DATA_DIR)) {
// //   fs.mkdirSync(DATA_DIR, { recursive: true });
// //   console.log('✅ Created data directory');
// // }

// // // Initialize files if they don't exist
// // if (!fs.existsSync(DOCUMENTS_FILE)) {
// //   fs.writeFileSync(DOCUMENTS_FILE, JSON.stringify([]));
// //   console.log('✅ Created documents.json');
// // }
// // if (!fs.existsSync(CLASSIFICATIONS_FILE)) {
// //   fs.writeFileSync(CLASSIFICATIONS_FILE, JSON.stringify([]));
// //   console.log('✅ Created classifications.json');
// // }

// // // File-based storage functions
// // const fileStorage = {
// //   // Documents
// //   async insertDocument(document) {
// //     try {
// //       const documents = JSON.parse(fs.readFileSync(DOCUMENTS_FILE, 'utf8'));
// //       document._id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
// //       document.createdAt = new Date();
// //       documents.push(document);
// //       fs.writeFileSync(DOCUMENTS_FILE, JSON.stringify(documents, null, 2));
// //       console.log(`✅ Document saved: ${document.title}`);
// //       return { insertedId: document._id };
// //     } catch (error) {
// //       console.error('❌ Error saving document:', error);
// //       throw error;
// //     }
// //   },
  
// //   async findDocuments(filter = {}) {
// //     try {
// //       const documents = JSON.parse(fs.readFileSync(DOCUMENTS_FILE, 'utf8'));
// //       return documents;
// //     } catch (error) {
// //       console.error('❌ Error reading documents:', error);
// //       return [];
// //     }
// //   },
  
// //   async searchDocuments(query) {
// //     try {
// //       const documents = JSON.parse(fs.readFileSync(DOCUMENTS_FILE, 'utf8'));
// //       const results = documents.filter(doc => 
// //         doc.content && doc.content.toLowerCase().includes(query.toLowerCase()) ||
// //         doc.title && doc.title.toLowerCase().includes(query.toLowerCase())
// //       );
// //       return results;
// //     } catch (error) {
// //       console.error('❌ Error searching documents:', error);
// //       return [];
// //     }
// //   },
  
// //   async countDocuments(filter = {}) {
// //     try {
// //       const documents = await this.findDocuments(filter);
// //       return documents.length;
// //     } catch (error) {
// //       return 0;
// //     }
// //   },
  
// //   // Classifications
// //   async insertClassifications(classifications) {
// //     try {
// //       fs.writeFileSync(CLASSIFICATIONS_FILE, JSON.stringify(classifications, null, 2));
// //       console.log(`✅ Classifications saved: ${classifications.length} categories`);
// //       return classifications;
// //     } catch (error) {
// //       console.error('❌ Error saving classifications:', error);
// //       throw error;
// //     }
// //   },
  
// //   async findClassifications() {
// //     try {
// //       return JSON.parse(fs.readFileSync(CLASSIFICATIONS_FILE, 'utf8'));
// //     } catch (error) {
// //       console.error('❌ Error reading classifications:', error);
// //       return [];
// //     }
// //   },
  
// //   // Statistics
// //   async getStats() {
// //     try {
// //       const documents = await this.findDocuments();
// //       const classifications = await this.findClassifications();
      
// //       // Group by file type
// //       const typeStats = {};
// //       documents.forEach(doc => {
// //         typeStats[doc.fileType] = (typeStats[doc.fileType] || 0) + 1;
// //       });
      
// //       // Group by classification
// //       const classStats = {};
// //       documents.forEach(doc => {
// //         const className = doc.classification || 'Unclassified';
// //         classStats[className] = (classStats[className] || 0) + 1;
// //       });
      
// //       // Calculate total size
// //       const totalSize = documents.reduce((sum, doc) => sum + (doc.fileSize || 0), 0);
      
// //       return {
// //         totalDocuments: documents.length,
// //         totalClassifications: classifications.length,
// //         totalSize,
// //         averageSize: documents.length > 0 ? totalSize / documents.length : 0,
// //         documentTypes: typeStats,
// //         classificationDistribution: classStats
// //       };
// //     } catch (error) {
// //       console.error('❌ Error getting stats:', error);
// //       return {
// //         totalDocuments: 0,
// //         totalClassifications: 0,
// //         totalSize: 0,
// //         averageSize: 0,
// //         documentTypes: {},
// //         classificationDistribution: {}
// //       };
// //     }
// //   }
// // };

// // module.exports = { fileStorage };


// // config/fileStorage.js - Enhanced with document management
// const fs = require('fs');
// const path = require('path');

// const DATA_DIR = path.join(__dirname, '../data');
// const DOCUMENTS_FILE = path.join(DATA_DIR, 'documents.json');
// const CLASSIFICATIONS_FILE = path.join(DATA_DIR, 'classifications.json');

// // Ensure data directory exists
// if (!fs.existsSync(DATA_DIR)) {
//   fs.mkdirSync(DATA_DIR, { recursive: true });
//   console.log('✅ Created data directory');
// }

// // Initialize files if they don't exist
// if (!fs.existsSync(DOCUMENTS_FILE)) {
//   fs.writeFileSync(DOCUMENTS_FILE, JSON.stringify([]));
//   console.log('✅ Created documents.json');
// }
// if (!fs.existsSync(CLASSIFICATIONS_FILE)) {
//   fs.writeFileSync(CLASSIFICATIONS_FILE, JSON.stringify([]));
//   console.log('✅ Created classifications.json');
// }

// // File-based storage functions
// const fileStorage = {
//   // Documents
//   async insertDocument(document) {
//     try {
//       const documents = JSON.parse(fs.readFileSync(DOCUMENTS_FILE, 'utf8'));
//       document._id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
//       document.createdAt = new Date();
//       documents.push(document);
//       fs.writeFileSync(DOCUMENTS_FILE, JSON.stringify(documents, null, 2));
//       console.log(`✅ Document saved: ${document.title}`);
//       return { insertedId: document._id };
//     } catch (error) {
//       console.error('❌ Error saving document:', error);
//       throw error;
//     }
//   },
  
//   async findDocuments(filter = {}) {
//     try {
//       const documents = JSON.parse(fs.readFileSync(DOCUMENTS_FILE, 'utf8'));
//       return documents;
//     } catch (error) {
//       console.error('❌ Error reading documents:', error);
//       return [];
//     }
//   },

//   // NEW: Save documents (for updates)
//   async saveDocuments(documents) {
//     try {
//       fs.writeFileSync(DOCUMENTS_FILE, JSON.stringify(documents, null, 2));
//       console.log(`✅ Documents updated: ${documents.length} documents`);
//       return documents;
//     } catch (error) {
//       console.error('❌ Error saving documents:', error);
//       throw error;
//     }
//   },

//   // NEW: Find document by ID
//   async findDocumentById(documentId) {
//     try {
//       const documents = await this.findDocuments();
//       return documents.find(doc => doc._id === documentId);
//     } catch (error) {
//       console.error('❌ Error finding document:', error);
//       return null;
//     }
//   },

//   // NEW: Update document
//   async updateDocument(documentId, updates) {
//     try {
//       const documents = await this.findDocuments();
//       const index = documents.findIndex(doc => doc._id === documentId);
      
//       if (index === -1) {
//         throw new Error('Document not found');
//       }
      
//       documents[index] = { ...documents[index], ...updates };
//       await this.saveDocuments(documents);
      
//       return documents[index];
//     } catch (error) {
//       console.error('❌ Error updating document:', error);
//       throw error;
//     }
//   },

//   // NEW: Delete document
//   async deleteDocument(documentId) {
//     try {
//       const documents = await this.findDocuments();
//       const filteredDocuments = documents.filter(doc => doc._id !== documentId);
      
//       if (documents.length === filteredDocuments.length) {
//         throw new Error('Document not found');
//       }
      
//       await this.saveDocuments(filteredDocuments);
//       return { deletedCount: 1 };
//     } catch (error) {
//       console.error('❌ Error deleting document:', error);
//       throw error;
//     }
//   },
  
//   async searchDocuments(query) {
//     try {
//       const documents = JSON.parse(fs.readFileSync(DOCUMENTS_FILE, 'utf8'));
//       const results = documents.filter(doc => 
//         doc.content && doc.content.toLowerCase().includes(query.toLowerCase()) ||
//         doc.title && doc.title.toLowerCase().includes(query.toLowerCase())
//       );
//       return results;
//     } catch (error) {
//       console.error('❌ Error searching documents:', error);
//       return [];
//     }
//   },
  
//   async countDocuments(filter = {}) {
//     try {
//       const documents = await this.findDocuments(filter);
//       return documents.length;
//     } catch (error) {
//       return 0;
//     }
//   },
  
//   // Classifications
//   async insertClassifications(classifications) {
//     try {
//       fs.writeFileSync(CLASSIFICATIONS_FILE, JSON.stringify(classifications, null, 2));
//       console.log(`✅ Classifications saved: ${classifications.length} categories`);
//       return classifications;
//     } catch (error) {
//       console.error('❌ Error saving classifications:', error);
//       throw error;
//     }
//   },
  
//   async findClassifications() {
//     try {
//       return JSON.parse(fs.readFileSync(CLASSIFICATIONS_FILE, 'utf8'));
//     } catch (error) {
//       console.error('❌ Error reading classifications:', error);
//       return [];
//     }
//   },
  
//   // Statistics
//   async getStats() {
//     try {
//       const documents = await this.findDocuments();
//       const classifications = await this.findClassifications();
      
//       // Group by file type
//       const typeStats = {};
//       documents.forEach(doc => {
//         typeStats[doc.fileType] = (typeStats[doc.fileType] || 0) + 1;
//       });
      
//       // Group by classification
//       const classStats = {};
//       documents.forEach(doc => {
//         const className = doc.classification || 'Unclassified';
//         classStats[className] = (classStats[className] || 0) + 1;
//       });
      
//       // Calculate total size
//       const totalSize = documents.reduce((sum, doc) => sum + (doc.fileSize || 0), 0);
      
//       return {
//         totalDocuments: documents.length,
//         totalClassifications: classifications.length,
//         totalSize,
//         averageSize: documents.length > 0 ? totalSize / documents.length : 0,
//         documentTypes: typeStats,
//         classificationDistribution: classStats
//       };
//     } catch (error) {
//       console.error('❌ Error getting stats:', error);
//       return {
//         totalDocuments: 0,
//         totalClassifications: 0,
//         totalSize: 0,
//         averageSize: 0,
//         documentTypes: {},
//         classificationDistribution: {}
//       };
//     }
//   }
// };

// module.exports = { fileStorage };


// config/fileStorage.js - Enhanced with document management and delete functionality
const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});



const DATA_DIR = path.join(__dirname, '../data');
const DOCUMENTS_FILE = path.join(DATA_DIR, 'documents.json');
const CLASSIFICATIONS_FILE = path.join(DATA_DIR, 'classifications.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  console.log('✅ Created data directory');
}

// Initialize files if they don't exist
if (!fs.existsSync(DOCUMENTS_FILE)) {
  fs.writeFileSync(DOCUMENTS_FILE, JSON.stringify([]));
  console.log('✅ Created documents.json');
}
if (!fs.existsSync(CLASSIFICATIONS_FILE)) {
  fs.writeFileSync(CLASSIFICATIONS_FILE, JSON.stringify([]));
  console.log('✅ Created classifications.json');
}
//insert to cloudinary
async function uploadToCloudinary(localFilePath) {
  try {
    const result = await cloudinary.uploader.upload(localFilePath, {
      resource_type: 'raw' 
    });
    return result;
  } catch (error) {
    console.error('❌ Cloudinary upload failed:', error);
    throw error;
  }
}


// File-based storage functions
const fileStorage = {
 

  // Documents
  async insertDocument(document) {
    try {
      const documents = JSON.parse(fs.readFileSync(DOCUMENTS_FILE, 'utf8'));
  
      document._id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
      document.createdAt = new Date();

  
      documents.push(document);
      fs.writeFileSync(DOCUMENTS_FILE, JSON.stringify(documents, null, 2));
      console.log(`✅ Document saved & uploaded: ${document.title}`);
  
      return { insertedId: document._id };
    } catch (error) {
      console.error('❌ Error saving document:', error);
      throw error;
    }
  }
  ,

  async uploadToCloudinary(filePath)  {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: 'raw',
      folder: 'documents',
    });

    console.log('📦 Uploaded to Cloudinary:', result); 

    return {
      secure_url: result.secure_url,
      public_id: result.public_id,
      size: result.bytes,
    };
  } catch (err) {
    console.error('❌ Cloudinary Upload Error:', err);
    throw err;
  }
},

  
  async findDocuments(filter = {}) {
    try {
      const documents = JSON.parse(fs.readFileSync(DOCUMENTS_FILE, 'utf8'));
      return documents;
    } catch (error) {
      console.error('❌ Error reading documents:', error);
      return [];
    }
  },

  // NEW: Find document by ID
  async findDocumentById(documentId) {
    try {
      const documents = await this.findDocuments();
      const document = documents.find(doc => doc._id === documentId);
      return document || null;
    } catch (error) {
      console.error('❌ Error finding document:', error);
      return null;
    }
  },

  // NEW: Delete document
  async deleteDocument(documentId) {
    try {
      const documents = await this.findDocuments();
      const initialLength = documents.length;
      const filteredDocuments = documents.filter(doc => doc._id !== documentId);
      
      if (filteredDocuments.length === initialLength) {
        throw new Error('Document not found');
      }
      
      await this.saveDocuments(filteredDocuments);
      console.log(`✅ Document deleted: ${documentId}`);
      
      return { deletedCount: 1 };
    } catch (error) {
      console.error('❌ Error deleting document:', error);
      throw error;
    }
  },

  // Save documents (for updates)
  async saveDocuments(documents) {
    try {
      fs.writeFileSync(DOCUMENTS_FILE, JSON.stringify(documents, null, 2));
      console.log(`✅ Documents updated: ${documents.length} documents`);
      return documents;
    } catch (error) {
      console.error('❌ Error saving documents:', error);
      throw error;
    }
  },

  // Update document
  async updateDocument(documentId, updates) {
    try {
      const documents = await this.findDocuments();
      const index = documents.findIndex(doc => doc._id === documentId);
      
      if (index === -1) {
        throw new Error('Document not found');
      }
      
      documents[index] = { ...documents[index], ...updates };
      await this.saveDocuments(documents);
      
      return documents[index];
    } catch (error) {
      console.error('❌ Error updating document:', error);
      throw error;
    }
  },
  
  async searchDocuments(query) {
    try {
      const documents = JSON.parse(fs.readFileSync(DOCUMENTS_FILE, 'utf8'));
      const results = documents.filter(doc => 
        doc.content && doc.content.toLowerCase().includes(query.toLowerCase()) ||
        doc.title && doc.title.toLowerCase().includes(query.toLowerCase())
      );
      return results;
    } catch (error) {
      console.error('❌ Error searching documents:', error);
      return [];
    }
  },
  
  async countDocuments(filter = {}) {
    try {
      const documents = await this.findDocuments(filter);
      return documents.length;
    } catch (error) {
      return 0;
    }
  },
  
  // Classifications
  async insertClassifications(classifications) {
    try {
      fs.writeFileSync(CLASSIFICATIONS_FILE, JSON.stringify(classifications, null, 2));
      console.log(`✅ Classifications saved: ${classifications.length} categories`);
      return classifications;
    } catch (error) {
      console.error('❌ Error saving classifications:', error);
      throw error;
    }
  },
  
  async findClassifications() {
    try {
      return JSON.parse(fs.readFileSync(CLASSIFICATIONS_FILE, 'utf8'));
    } catch (error) {
      console.error('❌ Error reading classifications:', error);
      return [];
    }
  },
  
  // Statistics
  async getStats() {
    try {
      const documents = await this.findDocuments();
      const classifications = await this.findClassifications();
      
      // Group by file type
      const typeStats = {};
      documents.forEach(doc => {
        typeStats[doc.fileType] = (typeStats[doc.fileType] || 0) + 1;
      });
      
      // Group by classification
      const classStats = {};
      documents.forEach(doc => {
        const className = doc.classification || 'Unclassified';
        classStats[className] = (classStats[className] || 0) + 1;
      });
      
      // Calculate total size
      const totalSize = documents.reduce((sum, doc) => sum + (doc.fileSize || 0), 0);
      
      return {
        totalDocuments: documents.length,
        totalClassifications: classifications.length,
        totalSize,
        averageSize: documents.length > 0 ? totalSize / documents.length : 0,
        documentTypes: typeStats,
        classificationDistribution: classStats
      };
    } catch (error) {
      console.error('❌ Error getting stats:', error);
      return {
        totalDocuments: 0,
        totalClassifications: 0,
        totalSize: 0,
        averageSize: 0,
        documentTypes: {},
        classificationDistribution: {}
      };
    }
  }
};

module.exports = { fileStorage, uploadToCloudinary };