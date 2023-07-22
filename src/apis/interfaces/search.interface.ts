export interface Search {
  content: {
    photos: { url: string }[];
    overallRatings: number;
    id: number;
    brandName: string;
    perfumeName: string;
    imgSrc: string;
    score: number;
    uuid: string;
  }[];
}
