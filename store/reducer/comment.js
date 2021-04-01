import * as actionType from '../action/actionType'
import * as ImagePicker from "expo-image-picker";

const initialState={
    comment:[{
        name:'Jack',
        avatar:'https://sacredimperfections.files.wordpress.com/2010/07/jack_11.jpg',
        message:'赞！'
    },{
        name:'Morty',
        avatar:'https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/38/1505816350-screen-shot-2017-09-19-at-111641.jpg?crop=0.502xw:1.00xh;0.0952xw,0&resize=480:*',
        message:'刺激！'
    },{
        name:'Wednesday',
        avatar:'https://tvline.com/wp-content/uploads/2021/01/american-gods-season-3-preview-wednesday.jpg?w=621',
        message:'I am Odin!'
    }],
    dummyImage:[
        {
            image:'https://plchldr.co/i/675x200?bg=111111'
        },
        {
            image:'https://plchldr.co/i/675x200?bg=111111'
        },
        {
            image:'https://plchldr.co/i/675x200?bg=111111'
        },
        {
            image:'https://plchldr.co/i/675x200?bg=111111'
        },
        {
            image:'https://plchldr.co/i/675x200?bg=111111'
        },
        {
            image:'https://plchldr.co/i/675x200?bg=111111'
        },
        {
            image:'https://plchldr.co/i/675x200?bg=111111'
        },
        {
            image:'https://plchldr.co/i/675x200?bg=111111'
        },
        {
            image:'https://plchldr.co/i/675x200?bg=111111'
        },
        {
            image:'https://plchldr.co/i/675x200?bg=111111'
        },
        {
            image:'https://plchldr.co/i/675x200?bg=111111'
        },
        {
            image:'https://plchldr.co/i/675x200?bg=111111'
        }
    ],
    activity:[{
        name:'Ross',
        Avatar:'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-friends-david-schwimmer.jpg',
        content:'分享了1张图片'
    },{
        name:'Ross',
        Avatar:'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-friends-david-schwimmer.jpg',
        content:'分享了1张图片'
    },{
        name:'Ross',
        Avatar:'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-friends-david-schwimmer.jpg',
        content:'分享了1张图片'
    },{
        name:'Ross',
        Avatar:'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-friends-david-schwimmer.jpg',
        content:'分享了1张图片'
    },{
        name:'Ross',
        Avatar:'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-friends-david-schwimmer.jpg',
        content:'分享了1张图片'
    },{
        name:'Ross',
        Avatar:'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-friends-david-schwimmer.jpg',
        content:'分享了1张图片'
    },{
        name:'Ross',
        Avatar:'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-friends-david-schwimmer.jpg',
        content:'分享了1张图片'
    }],
    newPost:[{
        name:'Heisenberg',
        avatar:'https://images-na.ssl-images-amazon.com/images/I/51porQK0%2BeL._AC_SL1100_.jpg',
        imageUrl:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/clownsnummer-im-zirkus-busch-berlin-1899aufnahme-georg-news-photo-1600783417.jpg',
        description:'在德国演出中，两个马戏团小丑并排站着。据希斯林报道，近8%的美国人都在与恐惧症作斗争：害怕小丑。'
    },{
        name:'Heisenberg',
        avatar:'https://images-na.ssl-images-amazon.com/images/I/51porQK0%2BeL._AC_SL1100_.jpg',
        imageUrl:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/clownsnummer-im-zirkus-busch-berlin-1899aufnahme-georg-news-photo-1600783417.jpg',
        description:'在德国演出中，两个马戏团小丑并排站着。据希斯林报道，近8%的美国人都在与恐惧症作斗争：害怕小丑。'
    }]
}

const comment=(state=initialState,action)=>{
    switch (action.type){
        case actionType.SEND_MESSAGE:
            const updateComment=[...state.comment]
            updateComment.push({
                name:'Frank',
                avatar:'https://static.hollywoodreporter.com/wp-content/uploads/2020/12/Shameless_1103_2281_R-H-2020-1607034816-928x523.jpg',
                message:action.input
            })
            return {
                ...state,
                comment: updateComment
            }
        case actionType.POST:
            const updatePost=[...state.newPost]
            updatePost.push({
                name:'Frank',
                avatar:'https://static.hollywoodreporter.com/wp-content/uploads/2020/12/Shameless_1103_2281_R-H-2020-1607034816-928x523.jpg',
                description:action.input,
                imageUrl:action.url
            })
            return {
                ...state,
                newPost: updatePost
            }
        default:
            return state
    }
}

export default comment