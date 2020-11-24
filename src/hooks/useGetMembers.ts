import { useQuery } from "react-query";

import { getMembers } from "api/members";

export default function useGetMembers() {
  return useQuery("/members", getMembers, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 30 * 60_000,
  });
}
