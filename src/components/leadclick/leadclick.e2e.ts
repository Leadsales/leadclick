import { newE2EPage } from '@stencil/core/testing';

describe('leadclick-widget', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<leadclick-widget></leadclick-widget>');
    const element = await page.find('leadclick-widget');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<leadclick-widget></leadclick-widget>');
    const component = await page.find('leadclick-widget');
    const element = await page.find('leadclick-widget >>> div');

    component.setProperty('cta', 'Contáctanos!');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Contáctanos!⚡️by leadsales.io`);

  });
});
