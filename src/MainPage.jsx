import PageLayout from "./PageLayout";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import NewTweet from "./NewTweet";
import Twit from "./Twit";

export default function MainPage() {
  const { data } = useQuery({
    queryKey: ["mainPageTwits"],
    queryFn: () =>
      axios.get("https://kiwitter-node-77f5acb427c1.herokuapp.com/twits"),
  });

  return (
    <PageLayout>
      <div className="sticky top-20 mb-6 mx-0 sm:mx-8">
        <NewTweet />
      </div>
      <div className="bg-white rounded-xl shadow-xl">
        {data
          ? data.data.map((twit) => <Twit key={twit.id} item={twit} />)
          : "yükleniyor"}
      </div>
    </PageLayout>
  );
}
