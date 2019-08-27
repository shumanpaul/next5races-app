import { RaceVenue } from './race-venue';
import { RaceType } from './race-type';

export class NextToJumpItem {
    EventID: number;
    EventName: string;
    EventTypeDesc: string;
    AdvertisedStartTime: Date;
    RaceNumber: number;
    EventType: RaceType;
    Venue: RaceVenue;
}
