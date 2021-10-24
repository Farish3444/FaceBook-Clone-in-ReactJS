import React from 'react'
import styled from 'styled-components'
import Content from './Content'

function ContentList() {
    return (
        <Container>
            <Content  
            image={"https://techunwrapped.com/wp-content/uploads/2021/10/1634580088_Apple-Introduces-Apple-M1-Pro-and-M1-Max-SoCs-A.jpg"}
            title={'the MacBook M1 Revolution'}
            />
            <Content 
            image={"https://techcrunch.com/wp-content/uploads/2020/11/IMG_0488-2.jpg?w=730&crop=1"}
            title={"M1 at it's Best"}
            />
            <Content  
                image={"https://cdn.vox-cdn.com/thumbor/EqmyxOxYUslPMwz4VTsnClKjiL4=/0x0:1908x1076/1200x0/filters:focal(0x0:1908x1076):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22936602/lcimg_2d0f1c7f_4824_4e90_b501_7d917bcd4ae2.jpg"}
                title={"Max for MAX Performance"}
            />
        </Container>
            
    )
}

export default ContentList

const Container = styled.div`

`