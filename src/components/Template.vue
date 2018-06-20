<template lang="html">
  <div id='header' class = "body block span label">
    <div class = "section">
      section 2
    </div>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="css">
@media print {
  .section {
    height: 100%;
    margin: 0px 0px 0px 0px;
  }
}
#header,footer {
  height: 0px;
}

.body {
  width: 206mm;
  height: 287mm;
  border: 1px solid #cccccc;
  margin:0px;
  pedding:0px;
}

.block {
  font-size:70%;line-height:100%;
  table-layout: fixed;
  border-spacing: 0px;
  padding:5mm 1mm 5mm 1mm;
  page-break-after: right;
}
.span {
		border-bottom: solid 1px black;
		display:table-cell;
		width: 50%;
		padding-bottom:5;
}
.label {
		float: left;
		display:table-cell;
}
</style>
