describe('My First demo appp testing', () => {
    it('Sign Up Test', async () => {
        await $(`~Login`).click();
        await $(`//android.widget.TextView[@text="Sign up"]`).click();
        await $(`~input-email`).setValue('test@email.com');
        await $(`~input-password`).setValue('password');
        await $(`~input-repeat-password`).setValue('password');
        await $(`//android.widget.TextView[@text="SIGN UP"]`).click();
        await expect($(`//android.widget.TextView[@resource-id="android:id/message"]`)).toHaveText('You successfully signed up!')
        await $(`//android.widget.Button[@resource-id="android:id/button1"]`).click();
    })

    it('Confirm Password Helper Test', async () => {
        await $(`~input-repeat-password`).setValue('passw0rd');
        await $(`//android.widget.TextView[@text="SIGN UP"]`).click();
        await expect($(`//android.widget.TextView[position() = 3]`)).toHaveText('Please enter the same password')
    })

    it('Horizontal Swipe Test', async () => {
        await $(`~Swipe`).click()
        await $(`//android.widget.TextView[@text="Swipe horizontal"]`).click()
        await driver.touchPerform([
            { action: 'press', options: { x: 1000, y: 1000 } },
            { action: 'wait', options: { ms: 1000 } },
            { action: 'moveTo', options: { x: 100, y: 1000 } },
            { action: 'release' }
        ])
        await expect($(`//android.widget.TextView[@text="GREAT COMMUNITY"]`)).toBeDisplayed()
        await driver.touchPerform([
            { action: 'press', options: { x: 100, y: 1000 } },
            { action: 'wait', options: { ms: 1000 } },
            { action: 'moveTo', options: { x: 1000, y: 1000 } },
            { action: 'release' }
        ])
        await expect($(`//android.widget.TextView[@text="FULLY OPEN SOURCE"]`)).toBeDisplayed()
    });

    it('Vertical Swipe Test', async () => {
        await $(`~Swipe`).click()
        for(let i = 0; i <= 2; i++) {
            await driver.touchPerform([
                { action: 'press', options: { x: 500, y: 1600 } },
                { action: 'wait', options: { ms: 1000 } },
                { action: 'moveTo', options: { x: 500, y: 300 } },
                { action: 'release' }
            ])
        }        
        await expect($(`//android.widget.TextView[@text="You found me!!!"]`)).toBeDisplayed()
    });

    it('Drag n Drop Test', async () => {
        await $(`~Drag`).click();
        await $(`//android.widget.TextView[@text="Drag and Drop"]`).click();
        await driver.touchPerform([
            { action: 'press', options: { x: 630, y: 1750 } },
            { action: 'wait', options: { ms: 1000 } },
            { action: 'moveTo', options: { x: 320, y: 600 } },
            { action: 'release'}
        ])
        await driver.touchPerform([
            { action: 'press', options: { x: 720, y: 1550 } },
            { action: 'wait', options: { ms: 1000 } },
            { action: 'moveTo', options: { x: 540, y: 600 } },
            { action: 'release'}
        ])
        await driver.touchPerform([
            { action: 'press', options: { x: 540, y: 1550 } },
            { action: 'wait', options: { ms: 1000 } },
            { action: 'moveTo', options: { x: 760, y: 600 } },
            { action: 'release'}
        ])
        await driver.touchPerform([
            { action: 'press', options: { x: 200, y: 1550 } },
            { action: 'wait', options: { ms: 1000 } },
            { action: 'moveTo', options: { x: 320, y: 830 } },
            { action: 'release'}
        ])
        await driver.touchPerform([
            { action: 'press', options: { x: 450, y: 1750 } },
            { action: 'wait', options: { ms: 1000 } },
            { action: 'moveTo', options: { x: 540, y: 830 } },
            { action: 'release'}
        ])
        await driver.touchPerform([
            { action: 'press', options: { x: 250, y: 1750 } },
            { action: 'wait', options: { ms: 1000 } },
            { action: 'moveTo', options: { x: 760, y: 830 } },
            { action: 'release'}
        ])
        await driver.touchPerform([
            { action: 'press', options: { x: 810, y: 1750 } },
            { action: 'wait', options: { ms: 1000 } },
            { action: 'moveTo', options: { x: 320, y: 1060 } },
            { action: 'release'}
        ])
        await driver.touchPerform([
            { action: 'press', options: { x: 890, y: 1550 } },
            { action: 'wait', options: { ms: 1000 } },
            { action: 'moveTo', options: { x: 540, y: 1060 } },
            { action: 'release'}
        ])
        await driver.touchPerform([
            { action: 'press', options: { x: 350, y: 1550 } },
            { action: 'wait', options: { ms: 1000 } },
            { action: 'moveTo', options: { x: 760, y: 1060 } },
            { action: 'release'}
        ])
        await expect($(`//android.widget.TextView[@text="You made it, click retry if you want to try it again."]`)).toBeDisplayed()
    })  
})