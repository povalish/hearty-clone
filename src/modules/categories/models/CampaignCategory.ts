import { CampaignType } from 'modules/campaigns/models/CampaignType';
import { Category } from './Category';

// Convert CampaignType model to Category model
// used in Home screen
export type CampaignCategory = CampaignType & Category;
