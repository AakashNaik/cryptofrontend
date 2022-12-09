
const loginReducer = (state, action) => {
    switch (action.type) {
      case "login":
        console.log('c',action.type);
        if (state.nftListbool===false)
           {
            let nftdata= getnftList(state.owneraddr)
            return {
                user: true, useraddr: state.useraddr, nftList: nftdata, data:state.data, nftListbool: true
                };
              }
        else
            if (state.nftList.length!==0)
              {  let datanft= getnftdata(state.nftList, state.data)
                  let list = state.nftList;
                  list.pop();
                  return {
                  user: true, useraddr: state.useraddr, nftList: list, data:[...(state.data),datanft], nftListbool: true
                  };
                }
            else
              return state;

        break;  
      case "logout":
        return{
            user: false, useraddr: '', nftList: [], data: [], nftListbool: false
        }
        break;
      default:
        return state;
    }
  };

 function  getnftList  (owneraddr) 
 {

    return  ['a','b','c','d']
 } 

 function getnftdata(nftList)
 {

    return 'data';
 }

 export default loginReducer;