import React,{Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {getInputToggleAction,getList} from './store/actionCreators'

//样式组件
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    SearchInput,
    BtnWrapper,
    BtnItem,
    SearchInputInfo,
    SearchInputTitle,
    SearchInputSwitch,
    SearchInfoList,
    SearchInfoItem
} from './style';


class Header extends Component{
    render(){
        return (
            <HeaderWrapper>
               <Logo></Logo>
               <Nav>
                   <NavItem className="active left">首页</NavItem>
                   <NavItem className="left">下载App</NavItem>
                   <NavItem className="right">登录</NavItem>
                   <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
                   <SearchWrapper>
                        <CSSTransition in={this.props.focused} timeout={200} classNames="slide">
                            <SearchInput onFocus={this.props.handleInputFocus} onBlur={this.props.handleInputBlur} className={this.props.focused ? 'focused' : ''}></SearchInput>
                        </CSSTransition>
                        <i className={`iconfont zoom ${this.props.focused ? 'focused' : ''}`}>&#xe614;</i>
                        {this.getListArea(this.props.focused)}
                   </SearchWrapper>
               </Nav>
               <BtnWrapper>
                    <BtnItem className="writting"><i className="iconfont">&#xe615;</i>写文章</BtnItem>
                    <BtnItem className="reg">注册</BtnItem>
               </BtnWrapper>
            </HeaderWrapper>
        )
    }

    getListArea(type){
        if(type){
            return (
                <SearchInputInfo>
                    <SearchInputTitle>
                        热门搜索
                        <SearchInputSwitch><i className="iconfont spin">&#xe851;</i>换一批</SearchInputSwitch>
                    </SearchInputTitle>
                    <SearchInfoList>
                        {this.props.list.map((item) => {
                            return (<SearchInfoItem>{item}</SearchInfoItem>);
                        })}
                    </SearchInfoList>
                </SearchInputInfo>
            );
        } else {
            return null;
        }
    }
    
}


const mapStateToProps = (state) => {
    return {
        // focused:state.get('header').get('focused')
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','list'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(){
            dispatch(getList());
            const action = getInputToggleAction(true);
            dispatch(action);
        },
        handleInputBlur(){
            const action = getInputToggleAction(false);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);