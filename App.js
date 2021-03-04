import React from 'react';
export default () => {
    const [value, setValue] = React.useState(['1']);
    const pictures = [
        {
            id: '1',
            name: 'foo',
            url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
        {
            id: '2',
            name: 'foo',
            url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
        {
            id: '3',
            name: 'foo',
            url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
        },
    ]; // 同上面的数据

    console.log(value); // 输出用户选择图片 id。

    return <PictureSelect pictures={pictures} value={value} onChange={(value) => setValue(value)} />
};
const PictureSelect = (props) => {
    const { pictures, value, onChange } = props;
    let allchange=(e)=>{
        if(e.target.checked){
            onChange(pictures.map((v)=>{
                return v.id
            }))
        }else{
            onChange([])
        }
    }
    let inputchange=(e,id)=>{
        let newarr;
        if(e.target.checked){
            newarr=value
            newarr.push(id)
        }else{
            newarr=value.filter((v)=>{
                if(id==v){
                    return false
                }
                return true
            })
        }
        onChange([...newarr])
    }
    return (
        <div>
            <div><input type="checkbox" checked={value.length==pictures.length?'checked':false}  onChange={(e)=>allchange(e)}/>已选中{value.length}，总共{pictures.length}个</div>
            <div>
            {
                pictures.map((v,index) => {
                    let bool = false
                    for (let i of value) {
                        if (i == v.id) {
                            bool = 'checked'
                            break
                        }
                    }
                    return( 
                    <div style={{ float: 'left' }} key={v.id}>
                        <input checked={bool} onChange={(e) => inputchange(e,v.id)} type="checkbox" name="img" />
                        <img src={v.url} style={{ display: 'block' }} />
                    </div>)
                })
            }
            </div>
        </div>
    )
}