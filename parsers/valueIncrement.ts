import { makeParseRuleModule } from "infinite-lang/rule/parser";

export default makeParseRuleModule({
    role: "statement",
    nodeType: "valueIncrement",
    priority: 0,
    isTopLevel: true,
}, [
    {
        tokenType: "plus",
    }
]);