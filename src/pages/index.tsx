import React, { useEffect } from "react";
import { Content } from "../components/Content/Content";
import { useStoreActions, useStoreState } from "../store";
import { CodeBlock, vs2015 } from "react-code-blocks";
import { findSeries } from "../functions/geoseries";
export const Main = () => {
  const updateData = useStoreActions((x) => x.geoSeries.updateData);
  const data = useStoreState((x) => x.geoSeries.data);
  useEffect(() => {
    if (!data) {
      let numberArr = [3, 5, 9, 15];
      const result = findSeries(numberArr);
      updateData(result);
    }
  });

  return (
    <Content>
      <h1>Geo Series</h1>

      <h2 className="mt-2">Function</h2>
      <CodeBlock
        text={findSeries}
        theme={vs2015}
        language="tsx"
        wrapLines
        showLineNumbers={true}
      />
      <h2>result find xyz</h2>
      {data && data}
    </Content>
  );
};
