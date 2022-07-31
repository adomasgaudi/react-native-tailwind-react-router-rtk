import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useTailwind } from "tailwind-rn/dist";
import { useDataQuery } from "../features/api/apiSlice";

const Home = () => {
  const tw = useTailwind();
  // const [content, setContent] = useState<any>([]);
  const { data: users, isSuccess, isLoading } = useDataQuery("");

  console.log(users);
  let content;
  if (isLoading) {
    content = <Text>Loadinng...</Text>;
  } else if (isSuccess) {
    content = (
      <FlatList
        data={users}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    );
  } else if (isSuccess) {
    content = <Text>{users}</Text>;
  }

  return <View>{content}</View>;
};

export default Home;
