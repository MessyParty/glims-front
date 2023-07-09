export interface Search {
  content: {
    photos: any;
    overallRatings: number;
    id: number;
    brandName: string;
    perfumeName: string;
    imgSrc: string;
    score: number;
    uuid: string;
  }[];
}
