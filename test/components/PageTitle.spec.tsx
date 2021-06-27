import { shallow } from "enzyme";
import PageTitle from "../../src/components/PageTitle";

describe('PageTitle', () => {
    it('shows children components', () => {
        const pageTitle = (
            <PageTitle>
                <span>Hello parent!</span>
            </PageTitle>
        );
        
        const wrapper = shallow(pageTitle);
        expect(wrapper.children().length).toBeGreaterThan(0);
    });
});