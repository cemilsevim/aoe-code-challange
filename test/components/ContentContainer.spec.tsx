import { shallow } from "enzyme";
import ContentContainer from "../../src/components/ContentContainer";

describe('ContentContainer', () => {
    it('shows children components', () => {
        const contentContainer = (
            <ContentContainer>
                <div id="children">
                    <span>Hello parent!</span>
                </div>
            </ContentContainer>
        );
        
        const wrapper = shallow(contentContainer);
        expect(wrapper.children().length).toBeGreaterThan(0);
    });
});