import renderer from 'react-test-renderer';
import Header from '../../src/components/Header';
import {
    BrowserRouter
} from "react-router-dom";
import ReactDOM from "react-dom";

describe('Header', () => {
    it('renders correctly', () => {
        const header = (
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        ReactDOM.render(header, document.createElement('div'));
        
        const headerRenderer = renderer.create(header);
        expect(headerRenderer.toJSON()).toMatchSnapshot();  
    });
});