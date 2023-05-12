import { makeParseRuleModule } from "infinite-lang/rule/parser";

export default makeParseRuleModule({
    role: "statement",
    nodeType: "valueDecrement",
    priority: 0,
    isTopLevel: true,
}, [
    {
        tokenType: "minus",
    }
]);