<script setup lang="ts">
const props = defineProps({
  data: {
    type: Array<any>,
    required: true,
    default: () => [],
  },
  handler: {
    type: Function,
    required: true,
  },
  opened: {
    type: Array<string>,
    required: true,
    default: [],
  }
});


const toggleRow = (id: string) => {
  const index = props.opened.indexOf(id);
  if (index > -1) {
    return props.handler(props.opened.splice(index, 1))
  } else {
    return props.handler(props.opened.push(id))
  }
}

const findItem = (array: [], CouponType: string, year: number) => {
  return array?.filter(i => {
    if (i.Years === year && i.CouponType === CouponType) {
      return i
    }
  }).slice(0, 1)
}

</script>

<template>
  <div class="table-data">
    <table class="table">
      <thead>
        <tr>
          <th scope="col" class="date-sent">Date sent <b-icon icon="caret-down-fill" variant="dark"
              class="carret-down" /></th>
          <th scope="col" class="company-header">Company <b-icon icon="caret-down-fill" variant="dark"
              class="carret-down" /></th>
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
              data-role="expander" @click="toggleRow(item.Id)"><b-icon icon="chevron-right" variant="dark"
                class="date-chevron" v-if="item.DateSent" v-show="!props.opened.includes(item.Id)" />
              <b-icon icon="chevron-down" variant="dark" class="date-chevron" v-if="item.DateSent"
                v-show="props.opened.includes(item.Id)" />{{ item.DateSent }}
            </td>
            <td scope="row" class="company-name" :class="{ 'company-name-active': item.DateSent }">{{ item.Company }}
            </td>
            <td scope="row" class="company-info">
              <div class="company-info-content">
                <span v-for="quote in findItem(item.Quote, 'FIX', 5)">{{ quote?.Amount }}</span>
                <span v-for="quote in findItem(item.Quote, 'FRN', 5)">{{ quote?.Amount }}</span>
              </div>
            </td>
            <td class="company-info">
              <div class="company-info-content">
                <span v-for="quote in findItem(item.Quote, 'FIX', 10)">{{ quote?.Amount }}</span>
                <span v-for="quote in findItem(item.Quote, 'FRN', 10)">{{ quote?.Amount }}</span>
              </div>
            </td>
            <td class="company-info">
              <div class="company-info-content">
                <span v-for="quote in findItem(item.Quote, 'FIX', 40)">{{ quote?.Amount }}</span>
                <span v-for="quote in findItem(item.Quote, 'FRN', 40)">{{ quote?.Amount }}</span>
              </div>
            </td>
          </tr>
          <tr v-show="props.opened.includes(item.Id)">
            <td></td>
            <td>Yield</td>
            <td class="company-info">
              <div class="company-info-content">
                <span v-for="quote in findItem(item.Quote, 'FIX', 40)">{{ quote?.Yield }}</span>
                <span v-for="quote in findItem(item.Quote, 'FRN', 40)">{{ quote?.Yield }}</span>
              </div>
            </td>
            <td class="company-info">
              <div class="company-info-content">
                <span v-for="quote in findItem(item.Quote, 'FIX', 40)">{{ quote?.Yield }}</span>
                <span v-for="quote in findItem(item.Quote, 'FRN', 40)">{{ quote?.Yield }}</span>
              </div>
            </td>
            <td class="company-info">
              <div class="company-info-content">
                <span v-for="quote in findItem(item.Quote, 'FIX', 40)">{{ quote?.Yield }}</span>
                <span v-for="quote in findItem(item.Quote, 'FRN', 40)">{{ quote?.Yield }}</span>
              </div>
            </td>
          </tr>
          <tr v-show="props.opened.includes(item.Id)">
            <td></td>
            <td>3MLSpread</td>
            <td class="company-info">
              <div class="company-info-content">
                <span v-for="quote in findItem(item.Quote, 'FIX', 40)">{{ quote["3MLSpread"] }}</span>
                <span v-for="quote in findItem(item.Quote, 'FRN', 40)">{{ quote["3MLSpread"] }}</span>
              </div>
            </td>
            <td class="company-info">
              <div class="company-info-content">
                <span v-for="quote in findItem(item.Quote, 'FIX', 40)">{{ quote["3MLSpread"] }}</span>
                <span v-for="quote in findItem(item.Quote, 'FRN', 40)">{{ quote["3MLSpread"] }}</span>
              </div>
            </td>
            <td class="company-info">
              <div class="company-info-content">
                <span v-for="quote in findItem(item.Quote, 'FIX', 40)">{{ quote["3MLSpread"] }}</span>
                <span v-for="quote in findItem(item.Quote, 'FRN', 40)">{{ quote["3MLSpread"] }}</span>
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
        padding-left: 30px;
        cursor: pointer;
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
            justify-content: space-between;

            span {
              min-width: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
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

    .company-name-active {
      color: #000;

    }

    .company-info {
      text-align: left;

      .company-info-content {
        display: flex;
        justify-content: space-between;
        width: 160px;

        span {
          min-width: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      &.five-years {
        // padding-right: 100px;
      }

      &.ten-years {}

      &.forty-years {}
    }

    tbody {
      width: 100%;

      .date-sent {
        cursor: pointer;
      }

      .date-chevron {
        margin-right: 8px;
      }

      tr {
        width: 100%;
      }
    }
  }
}
</style>
