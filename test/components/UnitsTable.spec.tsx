import { shallow } from "enzyme";
import UnitsTable from "../../src/components/UnitsTable";
import MockUnits from "../../src/mock-data/age-of-empires-units.json";

describe('UnitsTable', () => {
    it('prints the units data from props.', () => {
        const unitsTable = (
            <UnitsTable units={MockUnits.units}/>
        );
        
        const wrapper = shallow(unitsTable);
        expect(wrapper.find('tbody tr').length).toEqual(MockUnits.units.length);
    });

    it('clicks on the table row.', () => {
        const onClickRow = jest.fn();
        const unitsTable = (
            <UnitsTable units={MockUnits.units} onClickRow={onClickRow}/>
        );
        
        const wrapper = shallow(unitsTable);
        expect(wrapper.find('tbody tr').first().simulate('click'));
        expect(onClickRow.mock.calls.length).toEqual(1);
    });
});