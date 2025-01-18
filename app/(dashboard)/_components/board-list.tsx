"use client";

import { EmptyBoards } from "./empty-boards";
import { EmptyFavourites } from "./empty-favourites";
import { EmptySearch } from "./empty-search";

interface BoardListProps {
  orgId?: string;
  query: {
    search?: string;
    favourites?: boolean;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = [];
  const { search, favourites } = query;

  if (!orgId) return <p>Select an organization to view your Thinkboards</p>;

  if (!data?.length && search) return <EmptySearch />;

  if (!data?.length && favourites) return <EmptyFavourites />;

  if (!data?.length) return <EmptyBoards />;

  return <div>{JSON.stringify(query)}</div>;
};
