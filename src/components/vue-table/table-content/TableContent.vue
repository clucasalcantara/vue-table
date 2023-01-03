<script setup lang="ts">
const props = defineProps({
  data: {
    type: Array<any>,
    required: true,
    default: () => [],
  },
});
</script>

<template>
  <div class="table-data">
    <table class="table">
      <thead>
        <tr>
          <th scope="col" class="date-sent">Date sent <b-icon icon="caret-down-fill" variant="dark" class="carret-down"/></th>
          <th scope="col" class="company-header">Company <b-icon icon="caret-down-fill" variant="dark" class="carret-down"/></th>
          <th>
            <div class="multi-header">
              <span class="multi-item">5 YRS</span>
              <div>
                <span>FIX</span>
                <span>FRN</span>
              </div>
            </div>
          </th>
          <th scope="col">
            <div class="multi-header">
              <span class="multi-item">10 YRS</span>
              <div>
                <span>FIX</span>
                <span>FRN</span>
              </div>
            </div>
          </th>
          <th scope="col">
            <div class="multi-header">
              <span class="multi-item">40 YRS</span>
              <div>
                <span>FIX</span>
                <span>FRN</span>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in props.data">
          <tr aria-expanded="true">
            <td class="date-sent" data-target="#collapseContent1" data-toggle="collapse" data-group-id="grandparent"
              data-role="expander"><b-icon icon="chevron-right" variant="dark" class="date-chevron" v-if="item.DateSent"/>{{ item.DateSent }}</td>
            <td scope="row" class="company-name" :class="{ 'company-name-active': item.DateSent }" >{{ item.Company }}</td>
            <td scope="row" class="company-info">
              <div class="company-info-content">
                <span>{{ item.Company }}</span>
                <span>{{ item.Company }}</span>
              </div>
            </td>
            <td class="company-info">
              <div class="company-info-content">
                <span>{{ item.Company }}</span>
                <span>{{ item.Company }}</span>
              </div>
            </td>
            <td class="company-info">
              <div class="company-info-content">
                <span>{{ item.Company }}</span>
                <span>{{ item.Company }}</span>
              </div>
            </td>
          </tr>
        </template>

      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
.table-data {
  display: flex;
  margin-top: 0;
  width: 100%;

  .table {
    padding-top: 0;
    width: 100%;


    thead {
      width: 100%;
      border-bottom: 1px solid #000;
      .date-sent {
        padding-left: 30px
      }

    

      tr {
        th {
          border: none;
          text-transform: uppercase;
          color: gray;
          padding-bottom: 5px;
        }

        .multi-header {
          display: flex;
          flex-direction: column;
          width: 160px;
          align-items: center;
          justify-content: center;

          .multi-item {
            border-bottom: 1px solid #000;
            width: 100%;
            color: #000;
            text-align: center;
            font-weight: bold;
          }

          div {
            display: flex;
            width: 100%;
            justify-content: space-around;
          }
        }
      }
    }

   
    .company-header {
      text-align: left;
    }

    .company-name {
      text-align: left;
      width: 40%;
      color: #d5d5d5;
      font-weight: bold;
    }

    .company-name-active{
      color: #000;
      
    }

    .company-info {
      text-align: left;

      .company-info-content {
        display: flex;
        justify-content: space-around;
        width: 160px;
      }

      &.five-years {
        // padding-right: 100px;
      }

      &.ten-years {}

      &.forty-years {}
    }

    tbody {
      width: 100%;

      .date-chevron{
        margin-right: 8px;
      }
      tr {
        width: 100%;
      }
    }
  }
}
</style>
