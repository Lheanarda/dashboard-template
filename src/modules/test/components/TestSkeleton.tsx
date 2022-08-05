import Card from "@src/components/Card";
import React from "react";

const TestSkeleton: React.FC = ({}) => {
  return (
    <>
      <Card outline className="bg-gray-300 animate-pulse h-32 col-span-2">
        <></>
      </Card>
      <Card outline className="bg-gray-300 animate-pulse h-32 col-span-2">
        <></>
      </Card>
      <Card outline className="bg-gray-300 animate-pulse h-24">
        <></>
      </Card>
      <Card outline className="bg-gray-300 animate-pulse h-24">
        <></>
      </Card>
      <Card outline className="bg-gray-300 animate-pulse h-24">
        <></>
      </Card>
      <Card outline className="bg-gray-300 animate-pulse h-24">
        <></>
      </Card>
    </>
  );
};
export default TestSkeleton;
