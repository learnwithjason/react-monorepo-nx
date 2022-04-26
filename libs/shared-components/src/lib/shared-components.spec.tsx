import { render } from '@testing-library/react';

import PageHeader from './shared-components';

describe('PageHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PageHeader />);
    expect(baseElement).toBeTruthy();
  });
});
