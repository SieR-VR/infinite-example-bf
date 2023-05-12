import { makeParseRuleModule } from "infinite-lang/rule/parser";

export default makeParseRuleModule({
    role: "statement",
    nodeType: "print",
    priority: 0,
    isTopLevel: true,
}, [
    {
        tokenType: "dot",
    }
]);