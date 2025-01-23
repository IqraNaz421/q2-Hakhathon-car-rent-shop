



// 'use client'



// import {visionTool} from '@sanity/vision'
// import {defineConfig} from 'sanity'
// import {structureTool} from 'sanity/structure'

// // Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
// import {apiVersion, dataset, projectId} from './src/sanity/env'
// import {schema} from './src/sanity/schemaTypes'
// import {structure} from './src/sanity/structure'

// export default defineConfig({
//   basePath: '/studio',
//   projectId,
//   dataset,
//   // Add and edit the content schema in the './sanity/schemaTypes' folder
//   schema,
//   plugins: [
//     structureTool({structure}),
//     // Vision is for querying with GROQ from inside the Studio
//     // https://www.sanity.io/docs/the-vision-plugin
//     visionTool({defaultApiVersion: apiVersion}),
//   ],
// })











'use client';

import {visionTool} from '@sanity/vision';
import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';

// Import API version, dataset, and projectId from the environment
import {apiVersion, dataset, projectId} from './src/sanity/env';
import {schema} from './src/sanity/schemaTypes';
import {structure} from './src/sanity/structure';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      structure,
    }),
    // Vision Tool: Specify the default API version explicitly
    visionTool({
      defaultApiVersion: apiVersion || '2023-01-01', // Ensure a fallback version
    }),
  ],
});
