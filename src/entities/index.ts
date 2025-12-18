/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: projectusecases
 * Interface for ProjectUseCases
 */
export interface ProjectUseCases {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image */
  image?: string;
  /** @wixFieldType text */
  benefits?: string;
  /** @wixFieldType text */
  targetAudience?: string;
}


/**
 * Collection ID: signlanguagegestures
 * Interface for SignLanguageGestures
 */
export interface SignLanguageGestures {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  gestureName?: string;
  /** @wixFieldType text */
  textTranslation?: string;
  /** @wixFieldType image */
  gestureImage?: string;
  /** @wixFieldType text */
  gestureCategory?: string;
  /** @wixFieldType text */
  gestureDescription?: string;
  /** @wixFieldType text */
  difficultyLevel?: string;
}
