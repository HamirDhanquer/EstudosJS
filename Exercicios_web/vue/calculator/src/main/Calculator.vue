<template>
  
    <div class="calculator">

        <Display value="1000" ></Display>
        <Button label="AC" triple ></Button>
        <Button label="/" operation ></Button>
        <Button label="7" ></Button>
        <Button label="8" ></Button>
        <Button label="9" ></Button>
        <Button label="*" operation ></Button>
        <Button label="4" ></Button>
        <Button label="5" ></Button>
        <Button label="6" ></Button>
        <Button label="-" operation></Button>
        <Button label="1" ></Button>
        <Button label="2" ></Button>
        <Button label="3" ></Button>
        <Button label="+" operation></Button>
        <Button label="0" double></Button>
        <Button label="." ></Button>
        <Button label="=" operation></Button>
    </div>

</template>

<script>
import Display from "../components/Display"
import Button from "../components/Button"

export default {
    components: { Button, Display }


}
</script>

<style>
.calculator{
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4 , 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}

</style>