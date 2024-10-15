import { useParams } from "react-router-dom";
import PageLayout from "./PageLayout";
import axios from "axios";
import Twit from "./Twit";
import { useQuery } from "@tanstack/react-query";

export default function UserTwits() {
  let { nickname } = useParams();
  const { data, isSuccess } = useQuery({
    queryKey: ["userTwits", nickname],
    queryFn: () =>
      axios.get(
        `https://kiwitter-node-77f5acb427c1.herokuapp.com/users/${nickname}/twits`
      ),
  });

  return (
    <PageLayout>
      <div className="bg-white rounded-xl shadow-xl">
        {isSuccess
          ? data.data.data.map((twit) => <Twit key={twit.id} item={twit} />)
          : "yükleniyor"}
      </div>
    </PageLayout>
  );
}
