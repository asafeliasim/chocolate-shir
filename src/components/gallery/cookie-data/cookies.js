import product1 from "../../../asserts/images/butter.jpeg";
import product3 from "../../../asserts/images/karmel.jpeg";
import product2 from "../../../asserts/images/cocaoProduct.jpeg";
import product4 from '../../../asserts/images/classicProduct.jpeg';
export const cookies = [
    {
        id:"1",
        bgStyle: {
            backgroundImage: `linear-gradient(to bottom,rgba(255,255,255,0.1),rgba(255,255,255,0.8)),url(${product3})`,
            backgroundSize: "cover",
        },
        name: "כרמל מלוח",
        types:[],
        fills:[]
    },
    {
        id:"2",
        bgStyle: {
            backgroundImage: `linear-gradient(to bottom,rgba(255,255,255,0.1),rgba(255,255,255,0.8)),url(${product1})`,
            backgroundSize: "cover",
        },
        name: "חמאת בוטנים",
        types: [
            {
                id:"1",
                title:"רגילה"
            },
            {
                id:"2",
                title:"קקאו"
            }
        ],
        fills:[]
    },
    {
        id:"3",
        bgStyle: {
            backgroundImage: `linear-gradient(to bottom,rgba(255,255,255,0.1),rgba(255,255,255,0.8)),url(${product2})`,
            backgroundSize: "cover",
        },
        name: "צ'יפס קקאו",
        types:[],
        fills:[
            {
                id:"1",
                title:"בלי מילוי"
            },
            {
                id:"2",
                title:"מריר"
            },
            {
                id:"3",
                title:"חלב"
            },
            {
                id:"4",
                title:"לבן"
            },
        ]
    },
    {
        id:"4",
        bgStyle: {
            backgroundImage: `linear-gradient(to bottom,rgba(255,255,255,0.1),rgba(255,255,255,0.8)),url(${product4})`,
            backgroundSize: "cover",
        },
        name: "צ'יפס קלאסי",
        types:[],
        fills:[
            {
                id:"1",
                title:"בלי מילוי"
            },
            {
                id:"2",
                title:"מריר"
            },
            {
                id:"3",
                title:"חלב"
            },
            {
                id:"4",
                title:"לבן"
            },
        ]
    }
]
