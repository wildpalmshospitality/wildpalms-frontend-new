import AgentDetails from "@/components/inner-pages/agent/agent-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "Wildpalms Hospitality - Agent Details",
};
const index = () => {
   return (
      <Wrapper>
         <AgentDetails />
      </Wrapper>
   )
}

export default index