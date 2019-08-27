import { RaceType } from './race-type';
import { RaceVenue } from './race-venue';

export class NextToJumpItem {
    EventID: number;
    EventName: string;
    EventTypeDesc: string;
    AdvertisedStartTime: Date;
    EventType: RaceType;
    Venue: RaceVenue;
}
