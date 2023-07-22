export type Review = {
  body: string;
  createdAt: string;
  heartCnt: number;
  longevityRatings: number;
  nickname: string;
  overallRatings: number;
  perfumeBrand: string;
  perfumeBrandEng: string;
  perfumeName: string;
  photoUrls: string[];
  sillageRatings: number;
  scentRatings: number;
  title: string;
  uuid: string;
  perfumeUuid?: string;
};

export type ReviewFormType = {
  body: string;
  longevityRatings: number;
  overallRatings: number;
  sillageRatings: number;
  scentRatings: number;
  title: string;
  photoUrls: string[];
};

export type ReviewPostType = ReviewFormType & { perfumeUuid: string };

export type ReviewParameterType = {
  offset: number;
  limit: number;
  orderStandard: string;
  sortType: string;
};

type ListType = {
  hasNext: boolean;
  totalElements: number;
  totalPages: number;
  uuid: string;
  photoUrl: string[];
  overallRating: number;
};

export type ReviewListType = {
  content: {
    nickname: string;
    heartCnt: number;
    uuid: string;
    body: string;
    longevityRatings: number;
    overallRatings: number;
    sillageRatings: number;
    scentRatings: number;
    title: string;
    photoUrls: string[];
    createdAt: string;
  }[];
};

export type ReveiwResponse = {
  body: string;
  longevityRatings: number;
  overallRatings: number;
  sillageRatings: number;
  scentRatings: number;
  title: string;
  perfumeUuid: string;
};
