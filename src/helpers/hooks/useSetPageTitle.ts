import { useContext, useEffect, ReactText } from "react";

import PageTitleContext from "helpers/context/PageTitleContext";

export default function useSetPageTitle(title: ReactText) {
  const [, setPageTitle] = useContext(PageTitleContext);
  useEffect(() => {
    setPageTitle(title);
  }, [title, setPageTitle]);
}
