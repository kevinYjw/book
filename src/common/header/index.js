import React,{Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {getInputToggleAction,getList,getHandleMouseEnterAction,getHandleChangePage} from './store/actionCreators'

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
                            <SearchInput onFocus={() => this.props.handleInputFocus(this.props.list)} onBlur={this.props.handleInputBlur} className={this.props.focused ? 'focused' : ''}></SearchInput>
                        </CSSTransition>
                        <i className={`iconfont zoom ${this.props.focused ? 'focused' : ''}`}>&#xe614;</i>
                        {this.getListArea()}
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
        let {list,totalPage,page,focused,mouseIn,handleChangePage,handleMouseEnter,handleLeaveEnter} = this.props;
        if(focused || mouseIn){
            const newList = list.toJS();
            const pageList = [];

            if(newList.length > 0){
                for(let i = (page - 1) * 10; i < page * 10; i++){
                    pageList.push(
                        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                    )
                }
            }

            return (
                <SearchInputInfo 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleLeaveEnter}>
                    <SearchInputTitle>
                        热门搜索
                        <SearchInputSwitch onClick={() => handleChangePage(page,totalPage)}><i className="iconfont spin">&#xe851;</i>换一批</SearchInputSwitch>
                    </SearchInputTitle>
                    <SearchInfoList>
                        {pageList}
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
        mouseIn:state.getIn(['header','mouseIn']),
        list:state.getIn(['header','list']),
        totalPage:state.getIn(['header','totalPage']),
        page:state.getIn(['header','page']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list){
            if(list.size === 0){
                dispatch(getList());
            }
            const action = getInputToggleAction(true);
            dispatch(action);
        },
        handleInputBlur(){
            const action = getInputToggleAction(false);
            dispatch(action);
        },
        handleMouseEnter(){
            const action = getHandleMouseEnterAction(true);
            dispatch(action);
        },
        handleLeaveEnter(){
            const action = getHandleMouseEnterAction(false);
            dispatch(action);
        },
        handleChangePage(page,totalPage){
            if(page < totalPage){
                const action = getHandleChangePage(page + 1);
                dispatch(action);
            } else {
                const action = getHandleChangePage(1);
                dispatch(action);
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);