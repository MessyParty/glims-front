export type PerfumeData = {
  brandId: number;
  brandName: string;
  longevityRatings: number;
  overallRatings: number;
  perfumeName: string;
  reviewCnt: number;
  sillageRatings: number;
  uuid: string;
};

export type Perfume = {
  content: any;
  pages?: {
    content?: [];
  }[];
  brandId: number;
  brandName: string;
  brandNameKor: string;
  longevityRatings: number;
  overallRatings: number;
  perfumeName: string;
  reviewCnt: number;
  sillageRatings: number;
  scentRatings: number;
  uuid: string;
  photos: { url: string }[];
  notes: { id: number; korName: string; engName: string }[];
  introduction: string;
};
