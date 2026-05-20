<template>
    <h1>Slot Template fragment</h1>
    <p>This is a Template Fragment added through the use of Slots</p>

    <h2>Slot Template Fragment Definition</h2>
    <p id="description">
        We have learned that components can accept props, which can be JavaScript values of any type. 
        But how about template content? In some cases, we may want to pass a template fragment 
        to a child component, and let the child component render the fragment within
        its own template.

        For example, we may have a <code>{{ '<FancyButton>' }}</code> component that supports usage like this:

        <div class="code">
            <span style="color:#E1E4E8;">&lt;</span>
            <span style="color:#79B8FF;">FancyButton</span>
            <span style="color:#E1E4E8;">&gt;</span>
            <span style="color:#E1E4E8;">  Click me! </span>
            <span style="color:#6A737D;">&lt;!-- slot content --&gt;</span>
            
            <span style="color:#E1E4E8;">&lt;/</span>
            <span style="color:#79B8FF;">FancyButton</span>
            <span style="color:#E1E4E8;">&gt;</span>
        </div>
        The template of &lt;FancyButton&gt; looks like this:
        <div class="code">
            <span style="color:#E1E4E8;">&lt;</span>
            <span style="color:#85E89D;">button</span>
            <span style="color:#B392F0;"> class</span>
            <span style="color:#E1E4E8;">=</span>
            <span style="color:#9ECBFF;">"fancy-btn"</span>
            <span style="color:#E1E4E8;">&gt;</span>
            <br/>    
            &emacr;<span style="color:#E1E4E8;">  &lt;</span>
            <span style="color:#85E89D;">slot</span>
            <span style="color:#E1E4E8;">&gt;&lt;/</span>
            <span style="color:#85E89D;">slot</span>
            <span style="color:#E1E4E8;">&gt; </span>
            <span style="color:#6A737D;">&lt;!-- slot outlet --&gt;</span>
            <br/>
            <span style="color:#E1E4E8;">&lt;/</span>
            <span style="color:#85E89D;">button</span>
            <span style="color:#E1E4E8;">&gt;</span>
        </div>
    </p>
</template>    