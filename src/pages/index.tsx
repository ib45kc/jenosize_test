import React, { useEffect } from "react";
import { Content } from "../components/Content/Content";
import { useStoreActions, useStoreState } from "../store";
import { CodeBlock, vs2015 } from "react-code-blocks";
export const Main = () => {
  const updateData = useStoreActions((x) => x.geoSeries.updateData);
  const data = useStoreState((x) => x.geoSeries.data);

  useEffect(() => {
    if (!data) {
      const result = findSeries();
      updateData(result);
    }
  });

  function findSeries(): string {
    let numberArr = [3, 5, 9, 15];
    for (let i = 0; i < 3; i++) {
      let nextValue =
        numberArr[numberArr.length - 1] +
        (numberArr[numberArr.length - 1] - numberArr[numberArr.length - 2] + 2);
      numberArr.push(nextValue);
    }
    return numberArr.slice(numberArr.length - 3, numberArr.length).join(",");
  }

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
      {data}
    </Content>
  );
};
