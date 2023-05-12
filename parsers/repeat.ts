import { makeParseRuleModule } from "infinite-lang/rule/parser";

export default makeParseRuleModule({ 
    role: "statement", 
    nodeType: "repeat", 
    priority: 0,
    isTopLevel: true,
}, [
    {
        tokenType: "LBracket",
    },
    {
        role: "statement",
        condition: () => true,
        key: "statements",
        isRepeatable: true,
    },
    {
        tokenType: "RBracket",
    }
]);