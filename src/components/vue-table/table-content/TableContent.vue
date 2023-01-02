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
    <table>
      <thead>
        <tr>
          <th>Date sent</th>
          <th class="company-header">Company</th>
          <th class="multi-header">
            <span>5 YRS</span>
            <div>
              <span>FIX</span>
              <span>FRN</span>
            </div>
          </th>
          <th class="multi-header">
            <span>10 YRS</span>
            <div>
              <span>FIX</span>
              <span>FRN</span>
            </div>
          </th>
          <th class="multi-header">
            <span>40 YRS</span>
            <div>
              <span>FIX</span>
              <span>FRN</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in props.data"
          :key="`${item.Company}-${item.DateSent}`"
        >
          <td class="date-sent">{{ item.DateSent }}</td>
          <td class="company-name">{{ item.Company }}</td>
          <td class="company-info five-years">
            <div class="company-info-content">
              <span>{{ item.Company }}</span>
              <span>{{ item.Company }}</span>
            </div>
          </td>
          <td class="company-info ten-years">
            <div class="company-info-content">
              <span>{{ item.Company }}</span>
              <span>{{ item.Company }}</span>
            </div>
          </td>
          <td class="company-info forty-years">
            <div class="company-info-content">
              <span>{{ item.Company }}</span>
              <span>{{ item.Company }}</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
.table {
  padding-top: 10rem;
  width: 100%;

  .table-controls {
    display: flex;
    justify-content: space-between;
    flex: 1;
    flex-direction: row;
  }

  .table-data {
    display: flex;
    justify-content: space-evenly;
    margin-top: 2rem;

    & table {
      display: flex;
      flex-direction: column;
      width: 100%;

      th {
        text-align: left;

        &.multi-header {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;

          & div {
            min-width: 120px;
            max-width: 150px;
            display: flex;
            justify-content: space-between;
          }
        }
      }

      .date-sent {
        min-width: 180px;
        // align-self: flex-start;
        text-align: left;
      }

      .company-name {
        min-width: 265px;
        margin-left: -65px;
        width: 130px;
        text-align: left;
      }

      .company-info {
        min-width: 250px;
        text-align: left;

        .company-info-content {
          display: flex;
          flex: 1;
          display: flex;
          justify-content: space-evenly;
          min-width: 200px;
        }

        &.five-years {
          padding-right: 50px;
          // padding-right: 100px;
        }

        &.ten-years {
          padding-left: 50px;
          padding-right: 80px;
        }

        &.forty-years {
          .company-info-content {
            width: 20px;
            margin-left: 15px;
            display: flex;
            justify-content: space-evenly;
          }
        }
      }

      tbody {
        width: 100%;
      }

      thead {
        tr {
          display: flex;
          justify-content: space-between;
          text-align: left;
        }
      }
    }
  }
}
</style>
