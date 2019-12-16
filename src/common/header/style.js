import styled from 'styled-components';
import logoPic from '../../images/logo.png';

export const HeaderWrapper = styled.div`
    position:relative;
    display:flex;
    height:56px;
    border:1px solid #f0f0f0;
`;

export const Logo = styled.a`
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain;
`;

export const Nav = styled.div`
    flex:1;
    height:100%;
    padding-left:70px;
    box-sizing:border-box;
    margin:0 auto;
`;

export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left {
        float:left;
    }
    &.right {
        float:right;
        color:#969696;
    }
    &.active {
        color:#ea6f5a;
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    float:left;
    .zoom {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;
        &.focused{
            background-color:#777;
            color:#fff;d
        }
	}
`;

export const SearchInput = styled.input.attrs({
    placeholder:'搜素'
})`
    width:160px;
    height:38px;
    padding:0 30px 0 20px;
    margin-top:9px;
    margin-left:20px;
    box-sizing:border-box;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    color:#666;
    &::placeholder {
        color:#999;
    }
    &.focused{
        width:240px;
    }
    &.slide-enter{
        transition:all .2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all .2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
`;

export const BtnWrapper = styled.div`
    height:56px;
`;

export const BtnItem = styled.div`
    float:right;
    margin:9px;
    margin-right:20px;
    padding:0 20px;
    line-height:38px;
    border-radius:19px;
    border:1px solid #ec6149;
    font-size:14px;
    &.red {
        color:#ec6149;
    }
    &.writting {
        color:#fff;
        background-color:#ec6149;
    }
`;