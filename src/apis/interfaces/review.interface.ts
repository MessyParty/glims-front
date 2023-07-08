export type Review = {
  [x: string]: string;
  body: string;
  createdAt: string;
  heartCnt: number;
  longevityRatings: number;
  nickname: string;
  overallRatings: number;
  perfumeBrand: string;
  perfumeName: string;
  photoUrls: string[];
  sillageRatings: number;
  title: string;
  tags?: string[];
  uuid: string;
};

export type ReviewFormType = Pick<
  Review,
  | "body"
  | "longevityRatings"
  | "overallRatings"
  | "photoUrls"
  | "sillageRatings"
  | "title"
  | "tags"
>;

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
export type ReviewListType = Omit<Review, "createdAt"> & ListType;
